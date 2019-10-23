const request = require('supertest');
const app = require('../app');
const index = require('../routes/index');

// Testataan, että GET request toimii
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