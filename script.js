
/* CAMBIAR AMBIENTE DE LA PAGINA */

function CambiarColorDeFondo(tema) {

    document.body.classList.remove(
        "tema-noche",
        "tema-rojo"
    );

    if (tema === "noche") {
        document.body.classList.add("tema-noche");
    }

    if (tema === "rojo") {
        document.body.classList.add("tema-rojo");
    }

}


/* CUENTA REGRESIVA */

function actualizarContador() {

    let ahora = new Date();

    let navidad = new Date(
        ahora.getFullYear(),
        11,
        25,
        0, 0, 0
    );

    if (ahora >= navidad) {

        navidad = new Date(
            ahora.getFullYear() + 1,
            11,
            25,
            0, 0, 0
        );

    }

    let diferencia = navidad - ahora;

    let dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    let horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    let minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    let segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}

actualizarContador();

setInterval(actualizarContador, 1000);


/* ENCENDER Y APAGAR LUCES DEL ARBOL */

function alternarLuces() {

    let arbol = document.getElementById("arbol-navidad");

    let boton = document.getElementById("boton-luces");

    arbol.classList.toggle("apagado");

    if (arbol.classList.contains("apagado")) {

        boton.textContent = "Encender luces ✨";

    } else {

        boton.textContent = "Apagar luces ✨";

    }

}


/* ABRIR REGALO */

let regaloAbierto = false;

function abrirRegalo() {

    let caja = document.getElementById("caja-regalo");

    let mensaje = document.getElementById("mensaje-regalo");

    if (regaloAbierto === false) {

        caja.textContent = "🎉";

        mensaje.style.display = "block";

        regaloAbierto = true;

    }

}


/* NIEVE CAYENDO */

function crearNieve() {

    let copo = document.createElement("div");

    let tipos = ["❄", "❅", "❆"];

    copo.textContent = tipos[
        Math.floor(Math.random() * tipos.length)
    ];

    copo.classList.add("copo");

    copo.style.left = Math.random() * 100 + "vw";

    copo.style.fontSize =
        (12 + Math.random() * 18) + "px";

    copo.style.opacity =
        0.4 + Math.random() * 0.6;

    let duracion = 4 + Math.random() * 5;

    copo.style.animationDuration = duracion + "s";

    document.body.appendChild(copo);

    setTimeout(function () {

        copo.remove();

    }, duracion * 1000);

}


/* CREAR NIEVE CADA CIERTO TIEMPO */

setInterval(crearNieve, 250);
