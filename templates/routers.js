const express = require("express");
const controllers = require("./controllers");
const router = express.Router();

router.get("/tasks", controllers.tasks_get);

module.exports = router;
