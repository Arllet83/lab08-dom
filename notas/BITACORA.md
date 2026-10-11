# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

<br>

| **Instruccion** | **Que cambio en la pantalla** | **Se mantiene al recargar (Si/No)** |
|---|---|---|
| **textContent desde la consola** | Cambió el texto del título principal | No |
| **textContent desde app.js** | Cambió el texto del título principal ("Hola TECSUP") | Si |
| **style.color** | El título cambió al color azul | Si |
| **classList.add** | El párrafo agregó un fondo de color amarillo claro | Si |
| **createElement + appendChild** | Se agregó un nuevo elemento de lista con el texto "JavaScript" | Si |

## Ejercicio 3: Evento click
<br>

| **Tipo de evento** | **Que accion lo dispara** | **Cuanto suma por accion** |
|---|---|---|
| **click** | Un clic simple sobre el botón | 1 |
| **dblclick** | Un doble clic rápido sobre el botón | 1 |
| **mouseover** | Pasar el cursor del mouse por encima del botón | 1 |

## Ejercicio 4: Eventos input y submit

<br>

| **Prueba** | **Que paso en la pantalla** | **Se recargo la pagina (Si/No)** |
|---|---|---|
| **Escribir en el campo nombre** | El texto aparece visualmente en el campo de texto del formulario | No |
| **Enviar sin preventDefault** | El formulario se envía y la página parpadea o se reinicia inmediatamente | Si |
| **Enviar con preventDefault, correo sin @** | Se ejecuta el código JS sin recargar, pero salta un mensaje de validación o error indicando que falta el "@" | No |
| **Enviar con preventDefault, correo con @** | El formulario se procesa correctamente sin recargar la página y muestra el mensaje de éxito o registro correcto | No |

## Ejercicio 5: Clases y objetos

<br>

| **Objeto** | **nombre** | **precio** | **descripcion()** | **conDescuento(0.25)** |
|---|---|---|---|---|
| **laptop** | 'Laptop' | 2500 | 'Laptop - S/ 2500.00' | 1875 |
| **mouse** | 'Mouse' | 45 | 'Mouse - S/ 45.00' | 33.75 |
| **teclado** | 'Teclado' | 120 | 'Teclado - S/ 120.00' | 90 |
| **monitor** | 'Monitor' | 850 | 'Monitor - S/ 850.00' | 637.5 |

## Ejercicio 6: DOM, eventos y objetos juntos

<br>

| **Prueba** | **Total que muestra la página** | **Correcto (Si/No)** |
|---|---|---|
| **Cuaderno 12.50** | S/ 12.50 | Sí |
| **+ Lapicero 3.20** | S/ 15.70 | Sí |
| **+ Mochila 89.90** | S/ 105.60 | Sí |
| **Sin Number()** | No calcula nada | No |

<br>

| **Pieza** | **Línea de tu código donde aparece** | **Para qué sirve** |
|---|---|---|
| **DOM** | Líneas 105 a 108 | Selecciona los elementos HTML (formulario, inputs, lista y total) para interactuar con ellos desde JavaScript. |
| **Evento** | Línea 111 | Escucha cuando el usuario presiona el botón de enviar (submit) para procesar los datos ingresados. |
| **Objeto** | Línea 115 | Crea una nueva instancia de la clase Producto y la agrega al carrito de compras. |