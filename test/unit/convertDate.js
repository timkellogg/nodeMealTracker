var expect = require('chai').expect;
var helpers = require('./../../app/helpers/convertDate');

describe('the convertDate helper', function() {
  it('converts ISO string dates to "DD/MM/YY format"', function() {
    var date = 'Sun Dec 25 2016 00:00:00 GMT-0800 (PST)';
    expect(helpers.convertDate(date)).to.equal('11/25/2016');
  });
});