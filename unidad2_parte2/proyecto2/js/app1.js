function validar() {
  var password = '1234';
  var MensajeError = 'contraseña incorrecta';
  var ingreso = document.getElementById("mensaje").value;


  if (password == ingreso) {
    
    dev();
    document.getElementById("error").innerHTML = " ";
} 
  
  else {
     // alert(MensajeError);
        document.getElementById("error").innerHTML = MensajeError;
         // document,getElementById("error").className = "alerta"
        document.getElementById("msjEncrip").innerHTML = "";
    }

  
}  


function dev() {
  var nombreUsser = document.getElementById("a").value;

  localStorage.setItem("abc",nombreUsser);

  // Ir a otra pagina
  location.href = "index2.html";
}
