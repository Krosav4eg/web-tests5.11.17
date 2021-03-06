// var _ = require('lodash');
// var presteps = require('./../../presteps/presteps.js');
// var auth = require('./../../presteps/auth.js');
//
// module.exports = _.assign(presteps, auth, {
//
//     'redirection to agenda': function (browser) {
//         browser
//             .relUrl('/event/212/speakers')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000);
//     },
//     'check event data': function (browser) {
//         browser
//             .useXpath()
//             .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
//             .assert.elementPresent('//h3[text()="IndustryForum Energy"]')
//             .assert.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
//             .assert.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
//             .assert.elementPresent('//div[text()="Venue: , "]');
//     },
//     'press on last name and redirection to info page': function (browser) {
//         browser
//             .useXpath()
//             .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/96967/eventId/212"]', 3000)
//             .click('//a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/96967/eventId/212"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//h4[text()="Person   - Hermsmeier Jörg (#96967)"]', 7000)
//             .assert.valueContains('//select[@name="MasterContact[ContactTypeId]"]', 'Delegate')
//             .assert.valueContains('//input[@name="MasterContact[FirstName]"]', 'Jörg')
//             .assert.valueContains('//input[@name="MasterContact[LastName]"]', 'Hermsmeier')
//             .assert.valueContains('//input[@name="MasterContact[Email]"]', 'joerg.hermsmeier@ewe.de')
//             .assert.valueContains('//input[@name="MasterContact[Mobile]"]', '+49162 133 1100');
//     },
//
// });