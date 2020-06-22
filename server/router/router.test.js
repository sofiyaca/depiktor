const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

describe('getAll Route endpoint', () => {
  it('Response is status 200', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });

  it('Response content type is json', async (done) => {
    const response = await request.get('/');
    expect(response.headers['content-type']).toBe(
      'application/json; charset=utf-8'
    );
    done();
  });
});
