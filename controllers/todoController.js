const Todo = require("../models/Todo");

// Create Todo
const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);

        res.status(201).json({
            success: true,
            message: "Todo Created Successfully",
            data: todo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();

        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Todo By ID
const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo Not Found",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Todo
const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true,
            }
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo Not Found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo Updated Successfully",
            data: todo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Todo
const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo Not Found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Mark Todo Completed
const markCompleted = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                completed: true,
            },
            {
                returnDocument: "after",
            }
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo Not Found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo Marked Completed",
            data: todo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    markCompleted,
};