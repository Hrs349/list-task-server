const listaDeTareas = require("./dbList-task");
const data = listaDeTareas;

function agregarTarea(nuevaTarea) {
  data.push(nuevaTarea);
}

function borrarTarea(idTarea) {
  const lista = data.filter((tarea) => tarea.id !== idTarea);
  data= lista;
}
function imprimirLista() {
  return data;
}

module.exports = { agregarTarea, borrarTarea, imprimirLista };
