var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'search by last name ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[3]/input[@type="text"]', ['Vekve', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/a', 3000)
            .verify.containsText("//tr[1]/td[3]/span/a", "Vekve")
    },
});