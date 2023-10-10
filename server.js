const express = require('express')
const app = express()
const port = 4000
const listView = require('./list-view-router')
const {listaDeTareas} = require('./dbList-task')



app.use('/task/list-view-router',listView)
app.use(express.json)

app.get('/', (req,res) => {
res.json(listaDeTareas)



})
app.listen(port, () => {
  console.log(`servidor activo en  el puerto ${port}`)
})