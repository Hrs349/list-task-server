const express = require("express");
const funciones = require("./funtions");
const routerTask = express.Router();

routerTask.use(express.json())

routerTask
  .delete("/:id", (req, res) => {
    const id = req.params.id;
    // const id2 = parseInt(id);
    funciones.borrarTarea(id);
    res.status(200).send(`la tarea con el id ${id} fue borrada`);
  })
  
  .post('/',(req, res) => {
    const datos =req.body
    // const data = JSON.stringify(datos)
    funciones.agregarTarea(datos)
    res.status(200).send('Tarea agregada exitosamente')
    
  })
  //solicitud UPDATE
  .put("/:id", (req, res) => {
    const ident = req.params.id
    const data = req.body
    funciones.editartarea(ident,data)
    res.status(200).send(`atributos actualizados ${data}`)
  })

module.exports = routerTask;
