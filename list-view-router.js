const express = require("express");
const router = express.Router();
//const lista = require("./dbList-task");
//let listaDeTareas = require("./dbList-task");
const funciones = require("./funtions");
const app = express();

router
  .get('/', (req, res) => {
    res.status(200).json(funciones.imprimirLista());
  })

  .get("/complete", (req, res) => {
    res.status(200).json(funciones.buscarstatus());
  })

  .get("/incomplete", (req, res) => {
    res.status(200).json(funciones.buscarincompletas());
  });

module.exports = router;
