// APLICANDO LO APRENDIDO 1

// ******* Metodo Push ********

let array = [1, 2, 3];
//Agrega un valor final
array.push(1);

console.log(array);




// ******** Metodo Pop *******
// Elimina el valor final

array.pop();

 console.log(array);

// ==========================




// APLICANDO LO APRENDIDO 2

// **** Metodo Unshift ****

//Agrega un valor al inicio
array.unshift(5);
 console.log(array);

 


// **** Metodo Shift() ****

//Elimina el primer valor de un array
 array.shift();
 console.log(array);


// APLICANDO LO APRENDIDO 3

// **** Metodo Slice() ****

 let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(array2);

 console.log(array2.slice(0,6));

 console.log (array2.slice(3,7));


// **** Metodo splice() ****

 let array3 = ['pedro', 'juan', 'maria', 'andrea','saul'];
array3.splice(0,4,'karina');

 console.log(array3);


// APLICANDO LO APRENDIDO 4

 let array4 = ['a', 'b', 'c'];
let array5 = ['d','e', 'f'];

let array6 = array4.concat(array5);

console.log(array6);

let array7 = ['a', 'b', 'c'];
let array8 = ['d','e', 'f'];
let array9 = ['g', 'h', 'i'];
let array10 = ['j','k', 'l'];

let array11 = array7.concat(array8,array9,array10);

console.log(array11);