import {
    crearDatos, 
    obtenerDatos,
    obtenerDatosTR ,
    obtenerDato,
    actualizarDato,
    borrarDato
} from '../database/firebase1';


const formularioTareas = document.getElementById("formTareas");
const cajaTareas = document.getElementById("cajaTasks");

const botonAccion = document.getElementById("btnAccion");


let estadoEditando = false;
let idTarea = "";

formularioTareas.addEventListener("submit", async (event) => {
  event.preventDefault();

  const tituloInput = formularioTareas["titulo"].value;
  const descripcionInput = formularioTareas["descripcion"].value;

  if (tituloInput == "" && descripcionInput == "") {
      console.log("Todos los campos son obligatorios");
      return;
  }

  const tarea = {
      titulo: tituloInput,
      descripcion: descripcionInput
  }


  if(estadoEditando){
          actualizarDato(idTarea,tarea);
          botonAccion.textContent = "Agregar tarea";
          estadoEditando = false;
  }else{
      try {
          await crearDatos(tarea);
          console.log("Tarea agregada");
      } catch (error) {
          console.log("Algo salio mal", error);
      }
  }



  formularioTareas.reset();


});



//obtenerTareas();


async function obtenerTareas() {
  const datos = await obtenerDatos();

  datos.forEach(dato => {

      //console.log(dato.data());

      const { titulo, descripcion } = dato.data();

      const cajaTarea = document.createElement("div");
      cajaTarea.classList.add("cajaTarea");

      const tituloTarea = document.createElement("h4");
      tituloTarea.textContent = titulo;

      const descripcionTarea = document.createElement("p");
      descripcionTarea.textContent = descripcion;

      cajaTarea.appendChild(tituloTarea);
      cajaTarea.appendChild(descripcionTarea);


      cajaTareas.appendChild(cajaTarea);


  });

}

obtenerTareasTR();

async function obtenerTareasTR() {

  await obtenerDatosTR(datos => {
      
      limpiarHtml(cajaTareas);

      datos.forEach(dato => {
          

          const { titulo, descripcion } = dato.data();

          const cajaTarea = document.createElement("div");
          cajaTarea.classList.add("cajaTarea");

          const tituloTarea = document.createElement("h4");
          tituloTarea.textContent = titulo;

          const descripcionTarea = document.createElement("p");
          descripcionTarea.textContent = descripcion;

          const btnEditar = document.createElement("button");
          btnEditar.classList.add("editar");
          btnEditar.textContent = "Editar";

          btnEditar.onclick = function(){
               obtenerTarea(dato.id);
               estadoEditando = true;
               botonAccion.textContent = "Guardar cambios";   
               idTarea = dato.id;             
          }

          const btnEliminar = document.createElement("button");
          btnEliminar.classList.add("eliminar");
          btnEliminar.textContent = "Eliminar"; 

          btnEliminar.onclick = function(){
             borrarTarea(dato.id);
          }


          cajaTarea.appendChild(tituloTarea);
          cajaTarea.appendChild(descripcionTarea);
          cajaTarea.appendChild(btnEditar);
          cajaTarea.appendChild(btnEliminar);


          cajaTareas.appendChild(cajaTarea);

      });
  })
}



async function obtenerTarea(id){

     const tarea = await obtenerDato(id);
     const {titulo,descripcion} = tarea.data();
    
     formularioTareas["titulo"].value = titulo;
     formularioTareas["descripcion"].value = descripcion;  

}

async function borrarTarea(id){
    await borrarDato(id);
}




function limpiarHtml(elemento){
  while(elemento.firstChild){
      elemento.removeChild(elemento.firstChild);
  }
}



       


