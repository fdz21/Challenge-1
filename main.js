// 
function ocultarDiv(contenedorInvisible) {
  var contenedorInvisible = document.querySelector(".container--not--hidden");
  var contenedorInvisible = (contenedorInvisible.style.display = "none");
}
function mostrarDiv() {
  var contenedorVisible = document.querySelector(".container--hidden");
  var contenedorVisible = (contenedorVisible.style.display = "block");
}
function validarClick() {
  var input = document.getElementById("textarea").value;
  if (input.length > 0) {
    ocultarDiv();
    mostrarDiv();
  }
}
function encriptar() {
  validarClick();
  var a = "ai";
  var e = "enter";
  var ii = "imes";
  var o = "ober";
  var u = "ufat";
  var input = document.getElementById("textarea").value;
  var mensajeFragmentado = input.split("");
  for (let i = 0; i <= mensajeFragmentado.length; i++) {
    if (mensajeFragmentado[i] == "a") {
      mensajeFragmentado[i] = mensajeFragmentado[i] + a;
    } else if (mensajeFragmentado[i] == "e") {
      mensajeFragmentado[i] = mensajeFragmentado[i] + e;
    } else if (mensajeFragmentado[i] == "i") {
      mensajeFragmentado[i] = mensajeFragmentado[i] + ii;
    } else if (mensajeFragmentado[i] == "o") {
      mensajeFragmentado[i] = mensajeFragmentado[i] + o;
    } else if (mensajeFragmentado[i] == "u") {
      mensajeFragmentado[i] = mensajeFragmentado[i] + u;
    }
  }
  console.log(mensajeFragmentado);
  console.log(mensajeFragmentado.join(""));
  var mensajeFragmentado = mensajeFragmentado.join("");
  transcripcion(mensajeFragmentado);
  return;
}

function desencriptar() {
  var a = "ai";
  var e = "enter";
  var ii = "imes";
  var o = "ober";
  var u = "ufat";
  var mensajeFragmentado = document.getElementById("input").value;
  console.log(mensajeFragmentado);
  for (let i = 0; i <= mensajeFragmentado.length; i++) {
    if (mensajeFragmentado.includes(a)) {
      mensajeFragmentado = mensajeFragmentado.replace("aai", "a");
    }
    if (mensajeFragmentado.includes(e)) {
      mensajeFragmentado = mensajeFragmentado.replace("eenter", "e");
    }
    if (mensajeFragmentado.includes(ii)) {
      mensajeFragmentado = mensajeFragmentado.replace("iimes", "i");
    }
    if (mensajeFragmentado.includes(o)) {
      mensajeFragmentado = mensajeFragmentado.replace("oober", "o");
    }
    if (mensajeFragmentado.includes(u)) {
      mensajeFragmentado = mensajeFragmentado.replace("uufat", "u");
    }
  }
  console.log(mensajeFragmentado);
  transcripcion(mensajeFragmentado);
  return;
}

function transcripcion(mensajeFragmentado) {
  document.getElementById("textarea--hidden").value = mensajeFragmentado;
}

function copiar() {
  var content = document.getElementById("textarea--hidden");
  content.select();
  document.execCommand("copy");
  alert("¡Texto copiado!");
}

// Variables

const botonEncriptar = document.getElementById("button1");
const botonDesencriptar = document.getElementById("button2");
const botonCopiar = document.getElementById("button--hidden");

//Clicks

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;