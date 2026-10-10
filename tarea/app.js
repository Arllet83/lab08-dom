// Tarea V1: Solo DOM e inserción estática inicial
console.log("Versión 1 cargada");

const listaInscritos = document.querySelector("#listaInscritos");
const liPrueba = document.createElement("li");
liPrueba.textContent = "Alumno de prueba: Sofia - 4 años - Mañana";
listaInscritos.appendChild(liPrueba);