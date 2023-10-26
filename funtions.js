let listaDeTareas = require("./dbList-task");

function agregarTarea(nuevaTarea) {
  listaDeTareas.push(nuevaTarea);
}

function borrarTarea(idTarea) {
  let nueva = listaDeTareas.filter((tarea) => tarea.id !== idTarea);
  listaDeTareas = nueva;
}
function imprimirLista() {
  return listaDeTareas;
}
function buscarstatus() {
  const busqueda = listaDeTareas.filter(
    (completas) => completas.completado == true
  );
  return busqueda;
}
function buscarincompletas() {
  const busqueda = listaDeTareas.filter(
    (completas) => completas.completado == false
  );
  return busqueda;
}
function editartarea(idnumero, body) {
  const tarea = listaDeTareas.findIndex((list) => list.id === idnumero);
  console.log(tarea)
  if (tarea !== -1) {
    Object.assign(listaDeTareas[tarea], body);
    console.log("tarea editada");
  } else {
    console.log("no se encontro la tarea ");
  }
}

module.exports = {
  agregarTarea,
  borrarTarea,
  imprimirLista,
  buscarstatus,
  buscarincompletas,
  editartarea,
};
//console.log(buscarincompletas());
