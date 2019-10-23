const request = require('supertest');
const app = require('../app');

test('/api/list POST request works', (done) => {
  return request(app)
    .post('/api/list').send({ title: "POST TEST", deadline: "done", completed: true, priority: "high" })
    .then(res => {
      expect(res.statusCode).toBe(201);
      expect(res.body).toBeDefined();
      expect(res.body.length).toBeGreaterThanOrEqual(1);
      done();
    });
});

test('/api/list PUT request works', (done) => {
  const testdata = { title:'PUT TEST', deadline: '01.01.1600', completed: true, priority: 'test' }
  return request(app)
    .put('/api/list/1').send(testdata).then(res => {
      expect(res.statusCode).toBe(200);
      expect(res.body).toBeDefined();
      console.log(res.body);
      done();
    });
});

test("Testataan, että GET request toimii", (done) => {
    return request(app)
        .get('/api/list').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
});

test("Testataan, että DELETE request toimii", (done) => {
    return request(app)
    .delete('/api/list/:id').then(response => {
        expect(response.statusCode).toBe(200);
        done();
    });
});
