const express = require("express");
const app = express();
const connectToDb = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const taskRoutes = require("./routes/taskRoutes");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", todoRoutes);
app.use("/", taskRoutes);

//Db Connection
connectToDb();

module.exports = app;
