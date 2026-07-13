const express = require("express");

const router = express.Router();

const {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    markCompleted,
} = require("../controllers/todoController");

router.post("/", createTodo);

router.get("/", getAllTodos);

router.get("/:id", getTodoById);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id/complete", markCompleted);

module.exports = router;