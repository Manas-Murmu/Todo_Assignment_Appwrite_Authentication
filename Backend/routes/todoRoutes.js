const express = require("express");
const { getATaskInTodo } = require("../controllers/taskController");
const {
  home,
  createTodo,
  getAllTodos,
  getSingleTodo,
  deleteATodo,
  editATodo,
} = require("../controllers/todoController");
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getAllTodos/:userId", getAllTodos);
router.get("/getSingleTodo/:id", getSingleTodo);
router.delete("/deleteATodo/:id", deleteATodo);
router.put("/editATodo/:id", editATodo);
router.get("/getATaskInTodo/:id", getATaskInTodo);

module.exports = router;
