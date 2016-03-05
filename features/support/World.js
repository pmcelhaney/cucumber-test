var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;


function World() {

  this.browser = new webdriver.Builder()
      .forBrowser('firefox')
      .build();

  this.visit = function (url, callback) {
    this.browser.get(url).then(callback);
  };
}

module.exports = function() {
  this.World = World;
};
