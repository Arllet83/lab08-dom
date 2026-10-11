// Tarea V3: Componente interactivo completo con Clases, Objetos y Eventos
class AlumnoJardin {
    constructor(nombre, edad, turno) {
        this.nombre = nombre;
        this.edad = edad;
        this.turno = turno;
    }

    // Método 1: Valida que la edad esté dentro del rango escolar permitido
    verificarEdad() {
        return this.edad >= 3 && this.edad <= 6;
    }

    // Método 2: Determina el nivel según la edad del alumno
    obtenerCategoriaEdad() {
        if (this.edad <= 4) {
            return "Nivel: Inicial 3-4 años";
        } else {
            return "Nivel: Inicial 5-6 años";
        }
    }

    // Método auxiliar para generar la ficha completa con categoría
    obtenerFicha() {
        return `${this.nombre} - ${this.edad} años - Turno: ${this.turno} (${this.obtenerCategoriaEdad()})`;
    }
}

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

    if (inputNombre.value.trim() === "" || inputEdad.value === "" || selectTurno.value === "") {
        mensajeAlerta.textContent = "Ingresar datos correctos";
        mensajeAlerta.style.color = "red";
        return;
    }

    const nuevoAlumno = new AlumnoJardin(inputNombre.value, Number(inputEdad.value), selectTurno.value);

    if (!nuevoAlumno.verificarEdad()) {
        mensajeAlerta.textContent = "Edad fuera del rango permitido (3-6 años)";
        mensajeAlerta.style.color = "red";
        return;
    }

    mensajeAlerta.textContent = "¡Alumno registrado con éxito!";
    mensajeAlerta.style.color = "green";

    const li = document.createElement("li");
    li.textContent = nuevoAlumno.obtenerFicha();
    listaInscritos.appendChild(li);

    formMatricula.reset();
});

// 2. Evento input (Escribir nombre)
inputNombre.addEventListener("input", () => {
    console.log("Escribiendo:", inputNombre.value);
});

// 3. Evento change (Cambiar turno)
selectTurno.addEventListener("change", () => {
    console.log("Turno cambiado a:", selectTurno.value);
});

// 4. Evento click (Botón limpiar)
btnClear.addEventListener("click", () => {
    formMatricula.reset();
    mensajeAlerta.textContent = "Formulario limpiado";
    mensajeAlerta.style.color = "blue";
});

// 5. Evento blur (Al salir del campo edad)
inputEdad.addEventListener("blur", () => {
    if (inputEdad.value && (Number(inputEdad.value) < 3 || Number(inputEdad.value) > 6)) {
        mensajeAlerta.textContent = "Ingresar datos correctos (edad 3-6)";
        mensajeAlerta.style.color = "orange";
    }
});