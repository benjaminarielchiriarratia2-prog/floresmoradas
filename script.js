
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const botonEntrar = document.getElementById("entrar");

// ==================================================
// MÚSICA
// ==================================================

// La música se carga desde la carpeta musica
const audioMusica = document.getElementById("audioMusica");
const botonMusica = document.getElementById("musica");

let reproduciendo = false;

// Entrar y comenzar la música
botonEntrar.addEventListener("click", async () => {
    inicio.classList.add("oculto");
    contenido.classList.add("visible");

    if (audioMusica) {
        try {
            await audioMusica.play();
            reproduciendo = true;

            if (botonMusica) {
                botonMusica.textContent = "Ⅱ";
            }
        } catch (error) {
            console.log("No se pudo iniciar el audio:", error);
        }
    }
});

// Pausar o reanudar desde el botón de música
if (botonMusica && audioMusica) {
    botonMusica.addEventListener("click", async () => {
        try {
            if (audioMusica.paused) {
                await audioMusica.play();
                reproduciendo = true;
                botonMusica.textContent = "Ⅱ";
            } else {
                audioMusica.pause();
                reproduciendo = false;
                botonMusica.textContent = "♫";
            }
        } catch (error) {
            console.log("Error al reproducir la música:", error);
        }
    });
}

// ==================================================
// CORAZONES Y DESTELLOS FLOTANTES
// ==================================================

function crearFlotante() {
    const elemento = document.createElement("div");
    elemento.className = "flotante";

    const simbolos = ["💜", "♡", "✨", "💗", "✧"];
    elemento.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    elemento.style.left = Math.random() * 100 + "vw";
    elemento.style.fontSize = (15 + Math.random() * 20) + "px";

    const duracion = 6 + Math.random() * 6;
    elemento.style.animationDuration = duracion + "s";

    document.body.appendChild(elemento);

    setTimeout(() => elemento.remove(), duracion * 1000);
}

setInterval(crearFlotante, 700);

// ==================================================
// TARJETAS INTERACTIVAS
// ==================================================

const ventana = document.getElementById("ventana");

document.querySelectorAll(".tarjeta").forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        document.getElementById("iconoGrande").textContent =
            tarjeta.dataset.icono;

        document.getElementById("textoVentana").textContent =
            tarjeta.dataset.texto;

        ventana.classList.add("visible");
    });
});

// Cerrar ventana
function cerrarVentana() {
    ventana.classList.remove("visible");
}

document.getElementById("cerrarVentana")
    .addEventListener("click", cerrarVentana);

ventana.addEventListener("click", evento => {
    if (evento.target === ventana) {
        cerrarVentana();
    }
});

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        cerrarVentana();
    }
});

// ==================================================
// MENSAJE DE DEDICATORIA
// ==================================================

const mensaje = document.getElementById("mensaje");

document.getElementById("abrirMensaje").addEventListener("click", () => {
    mensaje.classList.add("visible");

    mensaje.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

document.getElementById("cerrarMensaje").addEventListener("click", () => {
    mensaje.classList.remove("visible");

    document.getElementById("abrirMensaje").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});