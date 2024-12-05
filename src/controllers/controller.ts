import { Request, Response, NextFunction } from "express";
import * as TodoService from "../services/todoService";

// Get all todos
export const getTodos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const todos = await TodoService.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

// Get a single todo by ID
export const getTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id: string = req.params.id; // Use string for MongoDB ID
    const todo = await TodoService.getTodoById(id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Create a new todo
export const createTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title } = req.body;
    if (!title) {
      res.status(400).json({ error: "Title is required" });
      return;
    }
    const newTodo = await TodoService.createTodo(title);
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

// Update a todo by ID
export const updateTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id: string = req.params.id; // Use string for MongoDB ID
    const updates = req.body;
    const updatedTodo = await TodoService.updateTodo(id, updates);

    if (updatedTodo) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Delete a single todo by ID
export const deleteTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id: string = req.params.id; // Use string for MongoDB ID
    const success = await TodoService.deleteTodo(id); // Use await to get the resolved value
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Delete all completed todos
export const deleteCompleted = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await TodoService.deleteCompletedTodos();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

