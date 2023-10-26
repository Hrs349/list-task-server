const express = require("express");
const funciones = require("./funtions");
const errorMid = require('./middlewareErr');
const routerTask = express.Router();

routerTask.use(express.json())

routerTask
  .delete("/:id", (req, res) => {
    const id = req.params.id;
    funciones.borrarTarea(id);
    res.status(200).send(`la tarea con el id ${id} fue borrada`);
  })
  
  .post('/',(req, res) => {
    const datos = req.body
    if(!datos || Object.keys(datos).length ===0){
      
      return errorMid(new Error('El cuerpo esta vacio'),req,res)
    }if(!datos ||!datos.id ||!datos.completado || !datos.descripcion){
      return errorMid(new Error('El formato de la solicitud es incorrecto'),req,res)
    }
    funciones.agregarTarea(datos)
    res.status(200).send('Tarea agregada exitosamente')
  })
  //solicitud UPDATE
  .put("/:id", (req, res) => {
    const ident = req.params.id
    const data = req.body
    if(!data || Object.keys(data).length === 0){
      return errorMid(new Error('El cuerpo esta vacio'),req,res)
    } if(!data||!data.completado || !data.descripcion){
      return errorMid(new Error('El formato de la solicitud es incorrecto'),req,res)
  }
    funciones.editartarea(ident,data)
    res.status(200).send(`atributos actualizados ${data}`)
  })

module.exports = routerTask;
