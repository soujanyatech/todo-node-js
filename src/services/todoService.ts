import Todo, { ITodo } from "../models/todo";

// Get all todos
export const getAllTodos = async (): Promise<ITodo[]> => {
  return await Todo.find();
};

// Get a single todo by ID
export const getTodoById = async (id: string): Promise<ITodo | null> => {
  return await Todo.findById(id);
};

// Create a new todo
export const createTodo = async (title: string): Promise<ITodo> => {
  const newTodo = new Todo({ title, completed: false });
  return await newTodo.save();
};

// Update a todo by ID
export const updateTodo = async (id: string, updates: Partial<ITodo>): Promise<ITodo | null> => {
  return await Todo.findByIdAndUpdate(id, updates, { new: true });
};

// Delete a todo by ID
export const deleteTodo = async (id: string): Promise<boolean> => {
  const result = await Todo.findByIdAndDelete(id);
  return result !== null;
};

// Delete all completed todos
export const deleteCompletedTodos = async (): Promise<void> => {
  await Todo.deleteMany({ completed: true });
};

