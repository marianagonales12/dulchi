 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 import {
   getFirestore,
   collection,
   addDoc  
  } 
 from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";


 import {getStorage,ref,uploadBytes,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";


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

 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);

 // Get a reference to the storage service, which is used to create references in your storage bucket
 const storage = getStorage();


 //CRUD

 //crear datos

 export const crearDatos = objeto => addDoc(collection(db,"paisajes"),objeto);

 
 //STORAGE
  
 export const obtenerReferencia = nombrePaisaje => ref(storage,`paisajes/${nombrePaisaje}`);
  
 export const subirImagen =  (file,referencia) => uploadBytes(referencia,file);

 export const obtenerEnlace = referencia => getDownloadURL(ref(storage,referencia));