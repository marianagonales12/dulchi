// METODO MAP
let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMap = numeros.
    map(a => a * a);

console.log(numerosMap);

//METODO REDUCE
// let numbers2 = [1, 2, 3, 4, 5];
// let reducer = numbrers2.reduce(function(a,b){
//     return a + b;
// })
// console.log(reducer);

//METODO SORT
let array = ['Karina', 'Andy', 'David' , 'Gianela' , 'Milagros' , 'Ana']
array.sort();

console.log(array);
 
let array2= [22,31,15,100,20]
array.sort(function(a,b){
    return a-b;
});
console.log(array2);

//METODO REVERSE
let array3 = [ 1 , 2 , 3 ,4 ,5];
console.log(array3);

array3.reverse();
console.log(array3);

//METODO SPLIT
let cadena = 'hello world , como estas hoy?';
console.log(cadena);

let cadena2 =cadena.split("") ;
console.log(cadena2);

//METODO JOIN
let a = ['Viento' , 'Lluvia' , 'Fuego'];
console.log (a);

let b = a.join();
console.log(b);

let c = a.join(' - ');
console.log(c);

let d = a.join(' ');
console.log(d);