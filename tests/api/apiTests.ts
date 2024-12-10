const { spec } = require('pactum');
require('should');

describe('API Testing - Example Tests', function () {

  it('GET - should get a response with status code 200', async () => {
    const response = await spec().get('https://reqres.in/api/users');
    (response.statusCode).should.be.eql(200);
  });

  it('GET - response body should have first_name', async () => {
    const response = await spec().get('https://reqres.in/api/users/2');
    (response.body.data.first_name).should.be.eql("Janet");
  });

  it('POST - should be able to create a user', async () => {
    const response = await spec().post('https://reqres.in/api/users')
    .withJson({
      "name": "morpheus",
      "job": "leader"
    });
    (response.statusCode).should.be.eql(201);
    (response.body.name).should.be.eql("morpheus");
  });

  it('PUT - should be able to update a user details', async () => {
    const response = await spec().put('https://reqres.in/api/users/2')
    .withJson({
      "name": "updated-morpheus",
      "job": "leader"
    });
    (response.statusCode).should.be.eql(200);
    (response.body.name).should.be.eql("updated-morpheus");
  });

  it('DELETE - should be able to delete user', async () => {
    const response = await spec().delete('https://reqres.in/api/users/2');
    (response.statusCode).should.be.eql(204);
  });
  
});