"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompletedTodos = exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
let todos = [];
let idCounter = 1;
const getAllTodos = () => todos;
exports.getAllTodos = getAllTodos;
const getTodoById = (id) => todos.find(todo => todo.id === id);
exports.getTodoById = getTodoById;
const createTodo = (title) => {
    const newTodo = { id: idCounter++, title, completed: false };
    todos.push(newTodo);
    return newTodo;
};
exports.createTodo = createTodo;
const updateTodo = (id, updates) => {
    const todo = (0, exports.getTodoById)(id);
    if (!todo)
        return undefined;
    todo.title = updates.title ?? todo.title;
    todo.completed = updates.completed ?? todo.completed;
    return todo;
};
exports.updateTodo = updateTodo;
const deleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteTodo = deleteTodo;
const deleteCompletedTodos = () => {
    todos = todos.filter(todo => !todo.completed);
};
exports.deleteCompletedTodos = deleteCompletedTodos;
