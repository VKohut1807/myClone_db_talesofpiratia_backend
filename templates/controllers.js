const mongoose = require("mongoose");
const db = require("../db");
const Task = db.task;

class controllers {
  async tasks_get(req, res) {
    await Task.find({})
      .then((tasks) => {
        if (tasks.length <= 0) {
          return res.status(404).json({ message: "data not found" });
        }
        res.status(200).send(tasks);
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error", error: err.message });
        mongoose.disconnect();
      });
  }
}

module.exports = new controllers();
