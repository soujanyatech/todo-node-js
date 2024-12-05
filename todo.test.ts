import request from "supertest";
import app from "../src/app";

describe("Todo API", () => {
  it("should create a new todo", async () => {
    const response = await request(app)
      .post("/api/todos")
      .send({ title: "Test Todo" });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Test Todo");
  });

  it("should get all todos", async () => {
    const response = await request(app).get("/api/todos");
    expect(response.statusCode).toBe(200);
  });

  it("should update a todo", async () => {
    const createResponse = await request(app)
      .post("/api/todos")
      .send({ title: "To be updated" });
    const id = createResponse.body.id;

    const updateResponse = await request(app)
      .put(`/api/todos/${id}`)
      .send({ completed: true });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.body.completed).toBe(true);
  });
});

