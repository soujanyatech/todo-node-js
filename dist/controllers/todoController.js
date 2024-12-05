"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompleted = exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodo = exports.getTodos = void 0;
const TodoService = __importStar(require("../services/todoService"));
// Get all todos
const getTodos = (req, res, next) => {
    try {
        const todos = TodoService.getAllTodos();
        res.status(200).json(todos);
    }
    catch (error) {
        next(error);
    }
};
exports.getTodos = getTodos;
// Get a single todo by ID
const getTodo = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const todo = TodoService.getTodoById(id);
        if (todo) {
            res.status(200).json(todo);
        }
        else {
            res.status(404).json({ error: "Todo not found" });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.getTodo = getTodo;
// Create a new todo
const createTodo = (req, res, next) => {
    try {
        const { title } = req.body;
        if (!title) {
            res.status(400).json({ error: "Title is required" });
            return;
        }
        const newTodo = TodoService.createTodo(title);
        res.status(201).json(newTodo);
    }
    catch (error) {
        next(error);
    }
};
exports.createTodo = createTodo;
// Update a todo by ID
const updateTodo = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updates = req.body;
        const updatedTodo = TodoService.updateTodo(id, updates);
        if (updatedTodo) {
            res.status(200).json(updatedTodo);
        }
        else {
            res.status(404).json({ error: "Todo not found" });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.updateTodo = updateTodo;
// Delete a single todo by ID
const deleteTodo = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const success = TodoService.deleteTodo(id);
        if (success) {
            res.status(204).end();
        }
        else {
            res.status(404).json({ error: "Todo not found" });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.deleteTodo = deleteTodo;
// Delete all completed todos
const deleteCompleted = (req, res, next) => {
    try {
        TodoService.deleteCompletedTodos();
        res.status(204).end();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteCompleted = deleteCompleted;
