const express = require("express");
const {
  createTaskTodo,
  deleteATaskInTodo,
  editATaskInTodo,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/createTaskTodo/:id", createTaskTodo);
router.delete("/deleteATaskInTodo/:id/", deleteATaskInTodo);
router.put("/editATaskInTodo/:id", editATaskInTodo);

module.exports = router;
