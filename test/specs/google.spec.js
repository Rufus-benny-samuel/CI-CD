const { default: $ } = require("webdriverio/build/commands/element/$");
const googlePage = require("../pageobjects/google.page");

describe('Google search', () => {
    it('Search for webdriverio',  () => {
        browser.url('https://www.google.com/')
		//googlePage.enterTest()
    });
});