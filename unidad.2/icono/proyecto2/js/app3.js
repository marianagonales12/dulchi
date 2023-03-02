function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);
  
    // alert(mensajeDesencriptado);
    document.getElementById("msjReal").innerHTML = (mensajeDesencriptado);
  
  
  }
  