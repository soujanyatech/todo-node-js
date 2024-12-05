import express from "express";
import * as TodoController from "../controllers/todoController";

const router = express.Router();

router.get("/", TodoController.getTodos);
router.get("/:id", TodoController.getTodo);
router.post("/", TodoController.createTodo);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);
router.delete("/", TodoController.deleteCompleted);

export default router;

