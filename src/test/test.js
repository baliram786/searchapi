var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3001");

// UNIT test begin


describe("Search api unit test",function(){

    // #1 should return home page
  
    it("Add new user info",function(done){
  
      //calling ADD api
      server
      .post('/api/user/new')
      .send({
        "id": 9,
        "name": "hello",
        "item":["cricket",
                "football",
                "hockey"
            ],
        "address": "agra",
        "pincode": 099020
       })
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200);
        res.body.error.should.equal(false);
        res.body.data.should.equal(30);
        done();
      });
    });
})