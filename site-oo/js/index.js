import { Cao } from "./Cao.js";
import { Gato } from "./Gato.js";
import { Vaca } from "./Vaca.js";

const cao = new Cao();
const gato = new Gato();
const vaca = new Vaca();

document.getElementById("audio-cao").src = cao.pegarSom();
document.getElementById("audio-gato").src = gato.pegarSom();
document.getElementById("audio-vaca").src = vaca.pegarSom();

const revelacaoImg = document.getElementById("imagem-revelacao");

document.getElementById("btn-cao").onclick = function () {
  revelacaoImg.src = cao.pegarFoto();
  revelacaoImg.alt = "Foto de um cão";
};

document.getElementById("btn-gato").onclick = function () {
  revelacaoImg.src = gato.pegarFoto();
  revelacaoImg.alt = "Foto de um gato";
};

document.getElementById("btn-vaca").onclick = function () {
  revelacaoImg.src = vaca.pegarFoto();
  revelacaoImg.alt = "Foto de uma vaca";
};
