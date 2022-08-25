const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const mockUser = {
    email: 'test@example.com',
    password: '123456'
  };

  it('#POST. If logged in, create a new restaurant review', async () => {
    const agent = request.agent(app);
    await agent.post('/api/v1/users').send(mockUser);

    const resp = await agent.post('/api/v1/restaurants/1/reviews').send({ user_id: 2, restaurant_id: 1, stars: 5, details: 'Stick Around' });
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      restaurant_id: expect.any(String),
      user_id: expect.any(String),
      stars: expect.any(String),
      details: expect.any(String)
    });
  });

  it('#DELETE. If logged in or admin, delete a restaurant review', async () => {
    const agent = request.agent(app);
    await agent.post('/api/v1/users').send({
      email: 'admin',
      password: '1234',
    });
    await agent
      .post('/api/v1/users/sessions')
      .send({ email: 'admin', password: '1234' });

    const resp = await agent.delete('/api/v1/reviews/1');
    expect(resp.status).toBe(200);
  });
});
