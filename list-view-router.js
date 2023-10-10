const express = require("express");
const router = express.Router();
const lista = require("./dbList-task");
const listaDeTareas = require("./dbList-task");


router.get('/', (req, res, next) => {
  res.status(200).json([listaDeTareas]);
  next();
});

router.get("/complete", (req, res) => {
  res.send("tareas comopletas");
});
router.get("/incomplete", (req, res) => {
  res.send("tareas incompletas");
});

module.exports = router;
