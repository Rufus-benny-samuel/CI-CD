// const { default: $ } = require("webdriverio/build/commands/element/$");

class GooglePage {

get inputField(){
	return $("//input[@class='gLFyf gsfi']");
}

enterTest(){
	this.inputField.setValue('test');
	browser.pause(5000);
}
}
module.exports = new GooglePage();
