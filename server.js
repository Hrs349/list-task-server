const express = require('express')
const app = express()
//const host = 'localhost'
const port = 4000

//app.use(express.json)
const respuesta = {
  "id": "12",
  "completado": false,
  "descripcion": "trotar en las tardes"
}
app.get('/', (req,res) => {
res.json(respuesta)


})
app.listen(port, () => {
  console.log(`servidor activo en  el puerto ${port}`)
})