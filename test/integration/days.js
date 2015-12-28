var baseUrl = 'http://localhost:5000';

module.exports = {
  'GET days/' : function (browser) {
    browser
      .url(baseUrl + '/days')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.container', 'Date')
  },

  'POST days/' : function (browser) {
    browser
      .setValue('input[type=text]', '11/19/1900')
      .click('button[name=submit]')
      .pause(1000)
      .assert.containsText('#days-list', '11/19/1900')
      .end();
  },

  // Delete action to delete created date
  'DELETE days/' : function (browser) {
    browser
      .url(baseUrl + '/days')
      .waitForElementVisible('body', 1000)
      .click('span:last-child')
      .pause(1000)
      .assert.containsText('#days-list', '11/19/1900')
      .end();
  }
};
