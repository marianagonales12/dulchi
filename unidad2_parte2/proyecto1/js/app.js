function encriptar() {
    var PasswordSistema = '1234';
    var MensajeError = 'contraseña incorrecta';

    var mensaje = document.getElementById("mensaje").value;
    var password = document.getElementById("password").value;
    // alert(mensaje + password);
  
  if (password == PasswordSistema) {
        alert("contraseña correcta: ingresaste");
        // alert ("contraseña correcta: ingresaste");
        document.getElementById("error").innerHTML = " ";
        var mensajeEncriptado = btoa(mensaje);
        // alert(mensajeEncriptado);
        document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;
         // alert(mensajeEncriptado);
        document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;

    } else {
        alert(MensajeError);
        // alert(MensajeError);
        document.getElementById("error").innerHTML = MensajeError;
         document,getElementById("error").className = alerta
        document.getElementById("msjEncrip").innerHTML = "";
    }
}
function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);
    // alert(mensajeDesencriptado);
    document.getElementById("msjReal").innerHTML = mensajeDesencriptado
    // document.getElementById("msjReal").className = "alert"

}
