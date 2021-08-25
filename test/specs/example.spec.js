const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
//testing ignore
describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
         LoginPage.login('tomsmith', 'SuperSecretPassword!');
        
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});