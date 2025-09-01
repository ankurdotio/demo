import request from 'supertest';
import app from '../src/app';

describe('App routes', () => {
  it('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /greet/:name returns greeting', async () => {
    const res = await request(app).get('/greet/Ada');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, Ada!' });
  });
});
