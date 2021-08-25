const loginPage = require("../pageobjects/login.page");

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        loginPage.open()
	});
});