function ingresar() {
    var passwordSistema = localStorage.getItem("_password");
    var usuario = localStorage.getItem("_usuario");

    var passordInput = document.getElementById("password").value;
    var usuarioInput = document.getElementById("usuario").value;
    var mensajeError = "Contraseña Incorrecta"

    if (passordInput == passwordSistema && usuario == usuarioInput)        {
        location.href = "inicio.html"
    } else {
        document.getElementById("error").innerHTML = mensajeError;
    }
}

function guardarNombre() {
    var nombre = document.getElementById("usuario").value;

    localStorage.setItem("_nombre", nombre)
}

function mostrarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("_usuario");
}

mostrarNombre();

function guardarDatos() {
    var datosNombre = document.getElementById("usuarioLogin").value;
    var datosPassword = document.getElementById("passwordLogin").value;

    localStorage.setItem("_usuario", datosNombre);
    localStorage.setItem("_password", datosPassword);

    location.href = "index.html"
}



function dev() {
  var nombreUsser = document.getElementById("a").value;

  localStorage.setItem("abc",nombreUsser);

  // Ir a otra pagina
  location.href = "inicio.html";
}
