function validar() {
    var password = '1234';
    var mensajeError = 'contraseña incorrecta';
    var ingreso = document.getElementById("mensaje").value;
  
    if (password == ingreso) {
      // alert( location.href="index2.html" );
      location.href="index2.html";
    }
  
  }