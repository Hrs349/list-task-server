const express = require("express");
const router = express.Router();
const funciones = require("./funtions");
router
  .get('/', (req, res) => {
    res.status(200).json(funciones.imprimirLista())
  })

  .get("/complete", (req, res) => {
    res.status(200).json(funciones.buscarstatus());
  })

  .get("/incomplete", (req, res) => {
    res.status(200).json(funciones.buscarincompletas());
  });
  router.use((req, res, next) => {
    res.status(404).send('No se encontró la página solicitada');
  })
  

module.exports = router;


