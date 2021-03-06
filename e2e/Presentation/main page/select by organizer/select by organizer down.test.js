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

    'select by organizer up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[3]')
            .clickBySelectorXpath('//tr/th[3]')

            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/a[contains(text(),"VTT Technical Research Centre of Finland")]', 5000)
            .verify.elementPresent('//tr[1]/td[3]/span/a[contains(text(),"VTT Technical Research Centre of Finland")]')
            .verify.elementPresent('//tr[2]/td[3]/span/a[contains(text(),"Tieto Deutschland GmbH")]')
            .verify.elementPresent('//tr[3]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[4]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[5]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[6]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[7]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[8]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[9]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[10]/td[3]/span/a[contains(text(),"Ferranti Computer Systems")]')
            .verify.elementPresent('//tr[11]/td[3]/span/a[contains(text(),"CTG - Corporate Transformation Group GmbH")]')
            .verify.elementPresent('//tr[12]/td[3]/span/a[contains(text(),"BET Büro für Energiewirtschaft und technische Planung GmbH")]')
            .verify.elementPresent('//tr[13]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[14]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[15]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[16]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[17]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[18]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[19]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[20]/td[3]/span/span[contains(text(),"Management Events")]')
    },
});