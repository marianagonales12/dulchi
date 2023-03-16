const inputImagen = document.getElementById("inputImagen");
const cajaPrevia = document.querySelector(".cajaPreviewImagen");



inputImagen.addEventListener("change",()=>{

       const imagen = inputImagen.files[0];
       
       const reader = new FileReader();
       reader.readAsDataURL(imagen);


       reader.onload = function(event){
              const previewImagen = document.createElement("img");
              previewImagen.src = event.target.result;

              const boton = document.createElement("button");
              boton.textContent = "X";
              boton.onclick = function(){
                   inputImagen.value = "";
                   cajaPrevia.removeChild(cajaPrevia.firstChild);
                   boton.remove();
              }

              if(cajaPrevia.firstChild){
                   cajaPrevia.removeChild(cajaPrevia.firstChild);
              }

              cajaPrevia.appendChild(previewImagen);
              cajaPrevia.appendChild(boton);
       }
        

         
});