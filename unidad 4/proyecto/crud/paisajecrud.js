import {
    crearDatos,
    obtenerReferencia,
    subirImagen,
    obtenerEnlace,
} from "../database/firebase";

const botonSubirCuadro = document.getElementById("btnSubirCuadro");
const inputImagen = document.getElementById("inputImagen");

let imagenObtenida;

inputImagen.addEventListener("change", () => {
    const imagen = inputImagen.files[0];
    imagenObtenida = imagen;
});

botonSubirCuadro.onclick = async function () {
    const nombrePaisaje = document.getElementById("nombrePaisaje").value;
    const descripcionPaisaje = document.getElementById("descripcionPaisaje").value;

    try {

        const blob = new Blob([imagenObtenida], { type: imagenObtenida.type });
        const referencia = await obtenerReferencia(imagenObtenida.name);
        await subirImagen(blob, referencia);

        const enlace = await obtenerEnlace(referencia);
        console.log(enlace);

        const objetoPaisaje = {
            titulo: nombrePaisaje,
            descripcion: descripcionPaisaje,
            imagen: enlace
        };

        await crearDatos(objetoPaisaje);

    } catch (error) {
        console.log(error);
    }
};