// import{hola} from "./firebase.js"
// hola();
import { guardarTarea } from "./firebase.js";
window.addEventListener('DOMContentLoaded', () => {

})

let form = document.getElementById('formulario');

form.addEventListener('submit', () => {
    let titulo = document.getElementById('titulo').value;
    let descrip = document.getElementById('descripcion').value;

    // console.log(titulo,descripcion);
    
    // alert(titulo,descrip);

    guardarTarea(titulo,descrip);
})