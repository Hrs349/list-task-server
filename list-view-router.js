const express = require("express");
const router = express.Router();
const lista = require("./dbList-task");
const listaDeTareas = require("./dbList-task");
const funciones = require('./funtions')


router.get('/', (req, res, next) => {
  res.status(200).json(funciones.imprimirLista());
  next();
});
router
.get("/complete", (req, res) => {
  res.send("tareas comopletas");
})
.get("/incomplete", (req, res) => {
  res.send("tareas incompletas");
});
router.route('/task/:id')
.delete((req,res) => {
    const id = req.params.id
    funciones.borrarTarea(id)
    res.send(`la tarea con el id ${id} fue borrada`)
})


module.exports = router;
