var express = require("express");
var router = express.Router();
const TodoItem = require("../models/models");

router.get("/todo-items", async (req, res) => {
  const items = await TodoItem.findAll();
  res.json(items);
});

router.get("/todo-items/:id", async (req, res) => {
  const item = await TodoItem.findByPk(req.params.id);
  item ? res.status(200).json(item) : res.sendStatus(404);
});

router.post("/todo-items/:id", async (req, res) => {
  const itemToUpdate = await TodoItem.findOne({ where: { id: req.params.id } });

  itemToUpdate.update({
    content: req.body.content,
    dueDateTime: req.body.dueDateTime,
    completed: req.body.completed,
  });

  itemToUpdate ? res.status(200).json(itemToUpdate) : res.sendStatus(500);
});

router.post("/todo-items", async (req, res) => {
  const newItem = await TodoItem.create(req.body);

  res.status(201).json(newItem);
});

router.delete("/todo-items/:id", async (req, res) => {
  const deletedItem = await TodoItem.destroy({ where: { id: req.params.id } });

  deletedItem > 0 ? res.sendStatus(200) : res.sendStatus(500);
});

module.exports = router;
