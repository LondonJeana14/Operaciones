// ==========================================
// Función genérica para mostrar mensajes
// ==========================================
function mostrarResultado(tipo, idContenedor, texto) {
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = `alert alert-${tipo}`;
    mensaje.textContent = texto;
}

// ==========================================
// 1. Costo del parque de diversiones
// ==========================================
function calcularParque(idContenedor) {
    const edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad < 0) {
        mostrarResultado("warning", idContenedor, "Ingrese una edad válida.");
        return;
    }

    let precio = 0;

    if (edad > 1 && edad < 4) precio = 0;
    else if (edad >= 4 && edad <= 8) precio = 2;
    else if (edad >= 9 && edad <= 16) precio = 5;
    else if (edad >= 17 && edad <= 35) precio = 7;
    else if (edad > 35) precio = 10;

    mostrarResultado("success", idContenedor, `Costo de entrada: $${precio}`);
}

// ==========================================
// 2. Categoría según el código del empleado
// ==========================================
function evaluarCodigo(idContenedor) {
    const codigo = document.getElementById("codigo").value;

    if (codigo.length !== 3 || isNaN(codigo)) {
        mostrarResultado("danger", idContenedor, "Ingrese un código numérico de 3 dígitos.");
        return;
    }

    let categoria = "";

    if (codigo.startsWith("0")) categoria = "Director General";
    else if (codigo.includes("9")) categoria = "Director";
    else if (codigo.includes("7")) categoria = "Staff";
    else categoria = "Seguridad";

    mostrarResultado("success", idContenedor, `Categoría: ${categoria}`);
}

// ==========================================
// 3. Pendiente entre dos puntos
// ==========================================
function calcularPendiente(idContenedor) {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    if ([x1, y1, x2, y2].some(isNaN)) {
        mostrarResultado("warning", idContenedor, "Ingrese todos los valores numéricos.");
        return;
    }

    if (x1 === x2) {
        mostrarResultado("danger", idContenedor, "La pendiente es indefinida (división entre cero).");
        return;
    }

    const m = (y2 - y1) / (x2 - x1);

    mostrarResultado("success", idContenedor, `Pendiente m = ${m}`);
}

// ==========================================
// 4. Evaluación del clima
// ==========================================
function evaluarClima(idContenedor) {
    const t = parseInt(document.getElementById("temp").value);
    const h = parseInt(document.getElementById("hum").value);

    if (isNaN(t) || isNaN(h) || h < 0 || h > 100) {
        mostrarResultado("warning", idContenedor, "Ingrese una temperatura y humedad válidas.");
        return;
    }

    let mensaje = "";

    if (t < 10) mensaje = "Clima frío";
    else if (t >= 10 && t <= 25 && h < 60) mensaje = "Clima templado y seco";
    else if (t >= 10 && t <= 25 && h >= 60) mensaje = "Clima templado y húmedo";
    else if (t >= 26 && t <= 35) mensaje = "Clima cálido";
    else if (t > 35) mensaje = "Clima caluroso extremo, mantente hidratado";
    else mensaje = "Valores fuera de rango, verifica los datos";

    mostrarResultado("success", idContenedor, mensaje);
}
