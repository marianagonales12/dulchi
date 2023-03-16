import {onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import {auth} from './src/database/firebase.js';

import './src/controllers/logout.js';
import './src/crud/crudTareas.js';



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      console.log("usuario logeado",uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  

