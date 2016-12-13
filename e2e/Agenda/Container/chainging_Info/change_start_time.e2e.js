var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled':true ,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000);
    },

    'creation container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 10000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'new_event2016 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00')
            .pause(1000);
    },

    'delete start time': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('i.fa.fa-pencil.edit-container', 2000)
            .click('i.fa.fa-pencil.edit-container')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('#containerStartHour input')
            .clearValue('#containerStartHour input')
            .pause(1000)
            .click('input#subHeading')
            .pause(2000)
            .useXpath()
            .assert.elementPresent('//p[text()=" Start Hour is required.           "]')
            .useCss()
            .setValue('#containerStartHour input', ['7:00', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 23:59           "]')
            .refresh()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000);
    },

    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 1000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]');

    },
});
