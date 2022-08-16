const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const UserService = require('../lib/services/UserService');

const mockUser = {
  email: 'test@example.com',
  password: '123456'
};

// const registerAndLogin = async (userProps = {}) => {
//   const password = userProps.password ?? mockUser.password;
//   const agent = request.agent(app);
//   const user = await UserService.create({ ...mockUser, ...userProps });
//   const { email } = user;
//   await agent.post('/api/v1/users/session').send({ email, password });
//   console.log({ user });
//   return [agent, user];
// };

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#POST create a new user', async () => {
    const res = await request(app).post('/api/v1/users').send(mockUser);
    const { email } = mockUser;

    expect(res.body).toEqual({
      id: expect.any(String),
      email,
    });
  });
  it('#POST sign in an existing user', async () => {
    const agent = request.agent(app);
    await agent.post('/api/v1/users').send(mockUser);
    const { email, password } = mockUser;
    // console.log(mockUser, 'Test'); //Mockuser Token
    const res = await agent.post('/api/v1/users/sessions').send({
      email,
      password
    });
    expect(res.body).toEqual({ message: 'Signed in Successfully' });

  });
});
