// import{hola} from "./firebase.js"
// hola();
import { guardarTarea, listarTareas, onListarTareas } from "./firebase.js";

let contenedor = document.getElementById("guardar");
// console.log(contenedor);
window.addEventListener('DOMContentLoaded', async () => {
    let lista = await listarTareas();
    // console.log(lista);

    onListarTareas((lista) => {
        let html = "";
        lista.forEach((doc) => {
            console.log(doc.data()._title);
            let tareas = doc.data()
            console.log(doc.data()._descripcion);
            //  let tarea = doc.data()._descripcion
            html += `
            <div>
            <h3 class="text-primary mt-3"> ${tareas._title} </h3>
            <p> ${tareas._descripcion} <p>
    
         
            </div>
    
            
            `

            contenedor.innerHTML = html;
        });
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