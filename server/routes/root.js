// Import Express JS library.
const express = require("express");
// Create a Router App.
const app = express.Router();
// Import the routes.
const api = require("./api");

// Create a Get Request handler for /.
app.get("/", (req, res) => {
  res.json("Welcome to Community Classroom!");
});

// API routes handler.
app.use("/api", api);

// Export the Router.
module.exports = app;
