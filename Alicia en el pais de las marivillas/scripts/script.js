
/* EJERCICIO 1: LA POCION DE ALICIA */

function calcularPocion() {
    const altura = Number(document.getElementById("altura").value);
    const pocion = Number(document.getElementById("pocion").value);
    const resultado = document.getElementById("resultadoPocion");

    if (altura <= 0 || !Number.isFinite(altura) ||
        !Number.isFinite(pocion) || pocion < 0 || pocion > 100) {
        resultado.textContent =
            "Error: introduce una altura positiva y una poción entre 0 y 100 ml.";
        return;
    }

    const alturaFinal = altura + pocion * 2;

    if (alturaFinal <= 180) {
        resultado.textContent =
            "¡Alicia puede pasar! Su altura final es " +
            alturaFinal + " cm.";
    } else if (alturaFinal > 180) {
        resultado.textContent =
            "¡Alicia no puede pasar! Su altura final es " +
            alturaFinal + " cm.";
    } else {
        resultado.textContent = "Corrige los datos ingresados.";
    }
}

document.getElementById("formPocion")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        calcularPocion();
    });


/* EJERCICIO 2: LA MERIENDA DEL SOMBRERERO */

function calcularMerienda() {
    const nombre = document.getElementById("nombre").value.trim();
    const bebida = document.getElementById("bebida").value;
    const tazas = Number(document.getElementById("tazas").value);
    const resultado = document.getElementById("resultadoMerienda");

    if (nombre === "" || !Number.isInteger(tazas) ||
        tazas < 1 || tazas > 20) {
        resultado.textContent =
            "Error: escribe un nombre y una cantidad entera de 1 a 20 tazas.";
        return;
    }

    let precio = 0;
    let nombreBebida = "";

    switch (bebida) {
        case "te":
            precio = 5;
            nombreBebida = "Té";
            break;
        case "cafe":
            precio = 8;
            nombreBebida = "Café";
            break;
        case "chocolate":
            precio = 10;
            nombreBebida = "Chocolate";
            break;
        case "limonada":
            precio = 6;
            nombreBebida = "Limonada";
            break;
        default:
            resultado.textContent = "Error: selecciona una bebida válida.";
            return;
    }

    const subtotal = precio * tazas;
    let descuento = 0;

    if (tazas >= 5) {
        descuento = subtotal * 0.10;
    }

    const total = subtotal - descuento;

    resultado.textContent =
        "Invitado: " + nombre +
        " | Bebida: " + nombreBebida +
        " | Cantidad: " + tazas +
        " | Precio unitario: Bs " + precio +
        " | Subtotal: Bs " + subtotal.toFixed(2) +
        " | Descuento: Bs " + descuento.toFixed(2) +
        " | Total: Bs " + total.toFixed(2);
}

document.getElementById("formMerienda")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        calcularMerienda();
    });


/* EJERCICIO 3: LA REINA DE CORAZONES */

function analizarCartas() {
    const cantidad = Number(document.getElementById("cartas").value);
    const resultado = document.getElementById("resultadoReina");

    if (!Number.isInteger(cantidad) ||
        cantidad < 1 || cantidad > 100) {
        resultado.textContent =
            "Error: introduce un número entero entre 1 y 100.";
        return;
    }

    let pares = 0;
    let impares = 0;
    let sumaPares = 0;
    let sumaImpares = 0;
    let secuencia = "";

    for (let numero = 1; numero <= cantidad; numero++) {
        secuencia += numero;

        if (numero % 2 === 0) {
            pares++;
            sumaPares += numero;
        } else {
            impares++;
            sumaImpares += numero;
        }

        if (numero < cantidad) {
            secuencia += ", ";
        }
    }

    let mayorSuma = "";

    if (sumaPares > sumaImpares) {
        mayorSuma = "La suma de los pares es mayor.";
    } else if (sumaImpares > sumaPares) {
        mayorSuma = "La suma de los impares es mayor.";
    } else {
        mayorSuma = "Las dos sumas son iguales.";
    }

    resultado.textContent =
        "Secuencia: " + secuencia +
        " | Cantidad de pares: " + pares +
        " | Cantidad de impares: " + impares +
        " | Suma de pares: " + sumaPares +
        " | Suma de impares: " + sumaImpares +
        " | " + mayorSuma;
}

document.getElementById("formReina")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        analizarCartas();
    });
