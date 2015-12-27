// process.env.NODE_ENV = 'test'; 

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server');
var expect = require('chai').expect;
var request = require('request');

chai.use(chaiHttp);

describe('days', function() {
  it('should go to the index page by default', function(done) {
    chai.request('http://localhost:5000/days')
      .get('/')
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        done();
      });
  });
  // it('should list a single day on /days/:id GET');

  it('should add a single day on /days POST', function(done) {
    chai.request('http://localhost:5000/days')
      .post('http://localhost:5000/days')
      .field('date', '11/24/1999')
      .end(function(err, res) {
        expect(res.status).to.equal(201);
        done();
      });
  });
  // it('should delete a single day on /days/:id DELETE');
});


// describe('day CRUD', function() {

//   var indexURL = 'http://localhost:5000/days';
//   var newURL = ''

//   describe('index action', function() {

//     it('should return a 200 status', function() {
//       request(indexURL, function(err, res, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//       });
//     });

//     it('should allow the user to add a new day', function() {
//       request(indexURL, function(err, res,body) {

//       });
//     });

//     it('should list days', function() {
//       request(indexURL, function(err, res, body) {

//       });
//     });
//   });
// });