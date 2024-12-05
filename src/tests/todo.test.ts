import request from 'supertest';
import app from '../app';

describe('Todo API', () => {
  it('should get all todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Learn Jest' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Learn Jest');
  });

  it('should update a todo', async () => {
    const todo = await request(app)
      .post('/api/todos')
      .send({ title: 'To be updated' });

    const res = await request(app)
      .put(`/api/todos/${todo.body.id}`)
      .send({ completed: true });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('completed', true);
  });

  it('should delete a todo', async () => {
    const todo = await request(app)
      .post('/api/todos')
      .send({ title: 'To be deleted' });

    const res = await request(app).delete(`/api/todos/${todo.body.id}`);
    expect(res.statusCode).toEqual(204);
  });
});

