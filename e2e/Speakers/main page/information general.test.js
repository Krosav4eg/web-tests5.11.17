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
            .verify.elementPresent('//h3[text()="IndustryForum Energy"]')
            .verify.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
            .verify.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
            .verify.elementPresent('//div[text()="Venue: , "]');
    },
});