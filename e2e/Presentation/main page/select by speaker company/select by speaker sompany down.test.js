var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select by speaker company up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[7]')
            .clickBySelectorXpath('//tr/th[7]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[7]/span/ul/li[contains(text(),"Telenor ASA")]', 5000)
            .verify.elementPresent('//tr[1]/td[7]/span/ul/li[contains(text(),"Telenor ASA")]')
            .verify.elementPresent('//tr[1]/td[7]/span/ul/li[contains(text(),":em engineering methods AG")]')
            .verify.elementPresent('//tr[1]/td[7]/span/ul/li[contains(text(),"Mainova AG")]')
            .verify.elementPresent('//tr[2]/td[7]/span/ul/li[contains(text(),"Telenor ASA")]')
    },
});