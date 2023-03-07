export function hola() {
  console.log('hola este mensaje es del main js');
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

import {
  getFirestore, // conexion a bases de datos
  collection, // SE CREA LA BASE DE DATOS
  addDoc, // anadir bases
  getDocs, //
  onSnapshot, //

} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//iniciar getFirestore
const db = getFirestore(app);
//inicar la base de datos
export const guardarTarea = (titulo, descripcion) => {  //GUARDA LOS DATOS
  addDoc(collection(db, "tareas"), {  //CREA UNO NUEVO CUANDO CAMBIAS EL NOMBRE
    _title: titulo,
    _descripcion: descripcion,
  });
  console.log("se agrego existosamente a la base de datos")
}
export const listarTareas = () => getDocs(collection(db, "tareas"));

export const onListarTareas = (callback) => onSnapshot(collection(db, "tareas"), callback)