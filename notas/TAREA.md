# Tarea: Mi componente interactivo

## Componente elegido
Sistema de inscripción de alumnos para un jardín infantil, que permite registrar los datos del niño(a), validar las edades permitidas mediante métodos de clase, gestionar turnos y mostrar alertas visuales dinámicas.

## Versión 1: solo DOM
- **Qué agregaste:** La estructura HTML base con el formulario de matrícula y la inserción inicial de elementos dinámicos mediante `document.createElement` y `appendChild`.
- **Por qué:** Para definir los componentes visuales principales y verificar la correcta vinculación del script con el DOM de la página.
- **Qué cambió en el comportamiento:** La interfaz muestra los campos organizados y permite ver nodos insertados estáticamente desde JavaScript en la lista del DOM.

<br>

- **Código principal:**
```javascript
const listaInscritos = document.querySelector("#listaInscritos");
const liPrueba = document.createElement("li");
liPrueba.textContent = "Alumno de prueba: Mirko - 4 años - Mañana";
listaInscritos.appendChild(liPrueba);
```
<br>


## Versión 2: con eventos
- **Qué agregaste:** Cinco tipos de eventos distintos (submit, input, change, click y blur) junto con un sistema de validación visual de campos que muestra mensajes cortos directamente en la página ("Ingresar datos correctos").

- **Por qué:** Para capturar las acciones del usuario en tiempo real, evitar el envío de formularios vacíos y dar retroalimentación interactiva inmediata en la interfaz.

- **Qué cambió en el comportamiento:** El formulario ahora reacciona de forma dinámica cuando el usuario escribe, cambia opciones del selector, limpia los campos o intenta enviar datos incompletos.

<br>

- **Código principal:**
```javascript
formMatricula.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputNombre.value.trim() === "" || inputEdad.value === "") {
        mensajeAlerta.textContent = "Ingresar datos correctos";
        return;
    }
    // ...
});
```

<br>

## Versión 3: con clases y objetos
- **Qué agregaste:** La clase propia AlumnoJardin con constructor, atributos (nombre, edad, turno) y dos métodos dedicados (verificarEdad() y obtenerCategoriaEdad(), además del auxiliar obtenerFicha()), instanciando objetos al enviar el formulario.

- **Por qué:** Para aplicar Programación Orientada a Objetos (POO), encapsulando la lógica de validación de edades y la categorización escolar de forma limpia y reutilizable.

- **Qué cambió en el comportamiento:** Los datos capturados del formulario se transforman en objetos estructurados que validan las reglas del jardín antes de renderizar la ficha completa en la lista interactiva.

<br>

- **Código principal:**
```javascript
class AlumnoJardin {
    constructor(nombre, edad, turno) {
        this.nombre = nombre;
        this.edad = edad;
        this.turno = turno;
    }
    verificarEdad() { return this.edad >= 3 && this.edad <= 6; }
    obtenerCategoriaEdad() { return this.edad <= 4 ? "Nivel: Inicial 3-4 años" : "Nivel: Inicial 5-6 años"; }
    obtenerFicha() { return `${this.nombre} - ${this.edad} años - Turno: ${this.turno}`; }
}
```
<br>

## Donde uso DOM, eventos y objetos

<br>

| **Pieza** | **Línea de tu código donde aparece** | **Para qué sirve** |
|---|---|---|
| **DOM** | Líneas 29 a 35 | Selecciona los elementos HTML (#formMatricula, #inputNombre, #listaInscritos, etc.) para interactuar con ellos. |
| **evento** | Líneas 38 a 87 | Escucha las acciones del usuario en tiempo real (submit, input, change, click, blur). |
| **objeto** | Líneas 2 a 27 y 47 | Define la clase AlumnoJardin con sus métodos e instancia objetos para procesar los datos de inscripción. |

<br>

## Pruebas realizadas

<br>

| **Acción** | **Resultado esperado** | **Resultado obtenido** |**Cumple (Si/No)** |
|---|---|---|---|
| **Enviar formulario vacío** | Muestra "Ingresar datos correctos" en rojo | Muestra el mensaje de advertencia| Si |
| **Ingresar edad fuera de rango (ej. 2)** | Bloquea el registro y avisa restricción | Muestra alerta de edad no permitida | Si |
| **Seleccionar turno Tarde** | Registra y muestra el turno elegido | Muestra el turno Tarde en la ficha | Si |
| **Escribir en el input de nombre** | Registra el evento en consola | Imprime el texto dinámicamente en consola | Si |
| **Hacer clic en el botón Limpiar** | Restablece los inputs y limpia mensajes | Limpia el formulario y avisa estado | Si |

<br>

## Por qué diseñé así mi clase

Diseñé la clase AlumnoJardin incorporando los atributos nombre, edad y turno porque constituyen la información elemental requerida para procesar la matrícula de un estudiante. Los métodos verificarEdad() y obtenerCategoriaEdad() fueron implementados de forma independiente para encapsular la lógica de negocio y las reglas institucionales (como validar que el alumno tenga entre 3 y 6 años y clasificarlo por su nivel formativo), manteniendo el código modular, limpio y fácil de mantener sin saturar el controlador de eventos principal.


