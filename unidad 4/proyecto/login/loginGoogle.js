
import {GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import {auth}  from '../database/firebase1.js';


const btnLoginGoogle = document.querySelector(".loginGoogle");


btnLoginGoogle.onclick = async function(){
    
    const provider = new GoogleAuthProvider();
    
    try {
        await signInWithPopup(auth,provider);       
        location.href = "pagina principal.html";
    } catch (error) {
        console.log("Algo salio mal",error);
    }
    
}