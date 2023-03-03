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
    // Swal.fire(
    //     'Datos registrado',
    //     'success')

    //Metodo de firebase que registra usuarios
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            Swal.fire(
                'Datos registrado',
                'success')

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..);

            Swal.fire({
                icon: 'error',
                title: 'hubo un error',
                text: 'Tus datos no han sido registrados!',

            })
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

            Swal.fire({
                title: 'ingresaste',
                width: 600,
                padding: '3em',
                color: '#9DEDF5',
                background: '#fff',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("img/img4.png")
                  left top
                  no-repeat `  ,
                confirmButtonText: 'ok',
                allowOutsideClik: true //permite cerrar la alerta haciendo click fuera del 
            }).then((result) => {
                if (result.isConfirmed) { window.location.href = 'pagina-principal.html'; }
            })
        })


        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // alert("contraseña incorrecta");

            Swal.fire({
                title: 'la contraseña que ingresaste es incorrecta',
                width: 600,
                padding: '3em',
                color: '#9DEDF5',
                background: '#fff',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("img/img3.png")
                  left top
                  no-repeat`
            })
        });
})






//cerrar sesion

$("#Salir").click(function () {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = 'index.html'

    })

})

$("#Cerrar").click(function () {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = 'index.html'

    })

})

//iniciar sesion con googlee
var provider = new firebase.auth.GoogleAuthProvider();
$("#btn-google").click(function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log("ingresa tu cuenta de google")
            window.location.href = 'pagina-principal.html'

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error al ingresar", errorCode ,errorMessage )
        });

})