const express = require("express");
const app = express();
const port = 4000;
const routes = require('./list-view-router',)
const router = require('./list-edit-router')

app.use(express.json())
app.use('/',routes);
app.use('/task',router);

app.listen(port, () => {
  console.log(`servidor activo en  el puerto ${port}`)
})