const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET should return list of restaurants', async () => {
    const res = await request(app).get('/api/v1/restaurants');
    const expected = [
      { id: '1', name: 'Bojangles', description: 'Fresh Biscuits' },
      { id: '2', name: 'Sonic', description: 'Roller skating barhops' },
      { id: '3', name: 'Zaxbys', description: 'Nuclear Fried Chicken' },
      { id: '4', name: 'Popeyes', description: 'Cajun Chicken' },
      { id: '5', name: 'Chik Fil-A', description: 'Eet Mor Chikin' },
      { id: '6', name: 'Raising Canes', description: 'Chicken Fingers' }        
    ];
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expected);
  });

  it('#GET should return a restaurant name, description and their review', async () => {
    const resp = await request(app).get('/api/v1/restaurants/2');
    console.log(resp.body);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      name: 'Sonic',
      stars: '4',
      details: 'I like chicken too',
      description: 'Roller skating barhops'
    });
  });
});
