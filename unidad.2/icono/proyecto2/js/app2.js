function encriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);

    // alert(mensajeEncriptado);
  document.getElementById("msjEncrip").innerHTML = (mensajeEncriptado);

}

function muestra() {
  document.getElementById("b").innerHTML += localStorage.getItem("abc");
}

muestra();