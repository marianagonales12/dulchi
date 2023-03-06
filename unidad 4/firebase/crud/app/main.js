// import{hola} from "./firebase.js"
// hola();
import { guardarTarea, listarTareas } from "./firebase.js";
window.addEventListener('DOMContentLoaded', async () => {
    let lista = await listarTareas();
    // console.log(lista);
    lista.forEach((doc) => {
        console.log(doc);
    });
});

let formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let titulo = formulario['titulo'].value;
    let descripcion = formulario['descripcion'].value;

    // console.log(titulo, descripcion);
    guardarTarea(titulo, descripcion);
    formulario.reset();
})