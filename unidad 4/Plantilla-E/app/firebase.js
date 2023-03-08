// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO:Agrega SDK para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.1/firebase-firestore.js"
import { } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
//====================================================
//REEMPLAZAR POR TUS PROPIAR CREDENCIALES DE FIREBASE
//====================================================
const firebaseConfig = {
    apiKey: "AIzaSyDFAbGr20mZIHEYy3wkpPHVD2otj508WbE",
    authDomain: "dulchi-53aaa.firebaseapp.com",
    projectId: "dulchi-53aaa",
    storageBucket: "dulchi-53aaa.appspot.com",
    messagingSenderId: "1088047325836",
    appId: "1:1088047325836:web:9cab520277271badb1d1a9",
    measurementId: "G-VZ3Z86YYNP"
  };
// INICIA FIREBASE
export const app = initializeApp(firebaseConfig); //recordar export es para poder importar app en otros archivos
//console.log(app);
// INICIA FIREBASE AUTOMATICO Y OBTIENE REFERENCIAS DEL SERVICIO
export const auth = getAuth(app);
//export const db = getFirestore(app);

//INICIAR CRUD 
const db = getFirestore(app);
//FUNCION PARA GUARDAR DATOS 
const saveTask =(title,descripcion,userMail)=>{
addDoc(collection(db, "task"));
};
//FUNCION PARA TRAER VARIOS DATOS
const getTasks = () => getDocs(collection(db, "task")) 

//FUNCION QUE TRAE DATOS EN TIEMPO REAL
const OngetTask = (callback) => onSnapshot(collection(db,"task")(callback) ) ;

//FUNCION PARA ELIMINAR 
const deleteTask = (id) => deleteTask(doc(db, "task", id));

//FUNCION PARA TRAER UN SOLO SATO
const getTask=  (id) => getDocs(doc(db, "task", id));

//FUNCION PARA ACTUALIZAR
const updateTask = (id , newFields) => updateDoc (doc(db , "task" , id ), newFields);