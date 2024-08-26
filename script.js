function encriptarTexto(texto) {
  return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
  return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

function encriptar() {
  const inputTexto = document.getElementById("inputTexto").value;
  const textoEncriptado = encriptarTexto(inputTexto);
  document.getElementById("outputTexto").value = textoEncriptado;
}

function desencriptar() {
  const inputTexto = document.getElementById("inputTexto").value;
  const textoDesencriptado = desencriptarTexto(inputTexto);
  document.getElementById("outputTexto").value = textoDesencriptado;
}

function copiar() {
  const outputTexto = document.getElementById("outputTexto");
  outputTexto.select();
  document.execCommand("copy");
  alert("Has copiado el texto de forma exitosa");
}

