/**
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(text) {
    var locatorTextInput = '//*[contains(text(),"' + text + '")]';
    this.useCss()
        .clickBySelectorXpath('//button[text()="Add new role"]')
        .clickBySelectorXpath('//*[contains(text(), "Event Role")]/..//option[text()="Awards candidate"]')
        .useCss()
        .clickBySelectorCss('#eventParticipant')
        .sendKeys('.auto-complete input', text)
        .pause(2000)
        .clickBySelectorXpath(locatorTextInput)
        .pause(2000)
        .clickBySelectorXpath('//button[text()="Save"]');

    return this;
};
