$(document).ready(function () {


    const firebaseConfig = {
        apiKey: "AIzaSyDFAbGr20mZIHEYy3wkpPHVD2otj508WbE",
        authDomain: "dulchi-53aaa.firebaseapp.com",
        projectId: "dulchi-53aaa",
        storageBucket: "dulchi-53aaa.appspot.com",
        messagingSenderId: "1088047325836",
        appId: "1:1088047325836:web:9cab520277271badb1d1a9",
        measurementId: "G-VZ3Z86YYNP"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    console.log(app);
});

//****** Registrar Usuarios ******
//Seleccionando el boton registrar
$("#btn-registrar").click(function () {
    //Capturar el email y el password
    let email = $("#email").val();
    let password = $("#password").val();

    // console.log(email, pass); //comprobamos si captura los datos


    //Metodo de firebase que registra usuarios
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('Creaste una cuenta exitosamente');
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
        });

})

//Ingresar con nuestro correo registrado
$("#btn-iniciar").click(function () {

    let email = $("#email").val();
    let password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            // alert("ingresaste");
            window.location.href = 'home.html';
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            alert("contraseña incorrecta");
        });
})

//cerrar sesion

$("#Salir").click(function () {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
     window.location.href='index.html'
   
      })

})

