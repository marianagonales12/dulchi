// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

  import { 
       getFirestore,
       collection,
       addDoc,
       getDocs ,
       onSnapshot,
       doc, 
       getDoc,
       updateDoc ,
       deleteDoc
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAJUF-W-mfyPXZU7c-QVAa5rigGQx2AeP0",
  authDomain: "dull-9fa96.firebaseapp.com",
  projectId: "dull-9fa96",
  storageBucket: "dull-9fa96.appspot.com",
  messagingSenderId: "318270378550",
  appId: "1:318270378550:web:7ba031dd471dbfcd07fe97",
  measurementId: "G-6QZ61RFXGX"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);

 //INICIALIZAR LA BASE DE DATOS

  const database = getFirestore(app);
 

  //CRUD  -->>   CREATE  -  READ  - UPDATE  - DELETE

   
  //CREATE

 export const crearDatos = (objeto) => addDoc(collection(database,"tasks"),objeto);

 //READ 
 
export const obtenerDatos = () => getDocs(collection(database,"tasks"));
 
//READ PERO EN TIEMPO REAL

export const obtenerDatosTR  = fn => onSnapshot(collection(database,"tasks"),fn);

//UPDATE

//obtenemos el dato
export const obtenerDato = (identificador) => getDoc(doc(database,"tasks",identificador));

//Actualizar dato
export const actualizarDato = (identificador,objetoActualizado) => updateDoc(doc(database,"tasks",identificador),objetoActualizado);
  

//Eliminar dato
export const borrarDato = (identificador) => deleteDoc(doc(database,"tasks",identificador));



