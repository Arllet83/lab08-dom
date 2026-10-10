// Tarea V1: Solo DOM e inserción estática inicial
console.log("Versión 1 cargada");

const listaInscritos = document.querySelector("#listaInscritos");
const liPrueba = document.createElement("li");
liPrueba.textContent = "Alumno de prueba: Sofia - 4 años - Mañana";
listaInscritos.appendChild(liPrueba);


// Tarea V2: Eventos y validaciones visuales
const formMatricula = document.querySelector("#formMatricula");
const inputNombre = document.querySelector("#inputNombre");
const inputEdad = document.querySelector("#inputEdad");
const selectTurno = document.querySelector("#selectTurno");
const btnClear = document.querySelector("#btnClear");
const listaInscritos = document.querySelector("#listaInscritos");
const mensajeAlerta = document.querySelector("#mensajeAlerta");

// 1. Evento submit (Enviar formulario)
formMatricula.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validación con mensaje visible corto
    if (inputNombre.value.trim() === "" || inputEdad.value === "" || selectTurno.value === "") {
        mensajeAlerta.textContent = "Ingresar datos correctos";
        mensajeAlerta.style.color = "red";
        return;
    }

    mensajeAlerta.textContent = "¡Inscripción exitosa!";
    mensajeAlerta.style.color = "green";

    const li = document.createElement("li");
    li.textContent = `${inputNombre.value} - ${inputEdad.value} años - Turno: ${selectTurno.value}`;
    listaInscritos.appendChild(li);

    formMatricula.reset();
});

// 2. Evento input (Reacción en tiempo real al escribir el nombre)
inputNombre.addEventListener("input", () => {
    console.log("Escribiendo nombre:", inputNombre.value);
});

// 3. Evento change (Al cambiar el turno en el selector)
selectTurno.addEventListener("change", () => {
    console.log("Turno seleccionado:", selectTurno.value);
});

// 4. Evento click (Botón limpiar)
btnClear.addEventListener("click", () => {
    formMatricula.reset();
    mensajeAlerta.textContent = "Formulario limpiado";
    mensajeAlerta.style.color = "blue";
});

// 5. Evento blur (Al salir del campo de edad)
inputEdad.addEventListener("blur", () => {
    if (Number(inputEdad.value) < 3 || Number(inputEdad.value) > 6) {
        mensajeAlerta.textContent = "Edad sugerida: de 3 a 6 años";
        mensajeAlerta.style.color = "orange";
    }
});