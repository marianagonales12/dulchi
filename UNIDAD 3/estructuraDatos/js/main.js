//Ejemplo Pila
class Pila {
    //Creamos constructor
    constructor() {
        this.Pila = [];
    }
    //agregar un elemento al final del array
    push(item) {
        this.Pila.push(item);
        return this.Pila;
    }
    //Metodo para eliminar elemento
    pop() {
        return this.Pila.pop();
    }
    //Metodo que retorne el ultimo valor ingresado
    ultimoValor() {
        return this.Pila[this.Pila.length - 1];
    }
    //Metodo que retorna el cantidad de elementos del array
    longitud() {
        return this.Pila.length;
    }
    //Muestre el contenido del array en la consola
    mostrar() {
        console.log(this.Pila);
    }
}


let abc = new Pila();
console.log(abc);
console.log(abc.longitud());
console.log(abc.push('Naranja'));
console.log(abc.push('Manzana'));
console.log(abc.longitud());
abc.mostrar();
console.log(abc.ultimoValor());
abc.mostrar();
abc.pop();
abc.mostrar();
console.log(abc.ultimoValor());


class dul {
    constructor() {
        this.dul = [];
    }


    push(item) {
        this.dul.push(item);
        return this.dul;
    }

    pop() {
        return this.dul.pop();
    }
    ultimoValor() {
        return this.dul[this.dul.length - 1];
    }

    longitud() {
        return this.dul.length;
    }

    mostrar() {
        console.log(this.dul);
    }
}




let dc = new dul();
// console.log(dc);
// console.log(dc.longitud());
// console.log(dc.push('dul'));
// console.log(dc.push('mariana'));
// console.log(dc.longitud());
// dc.mostrar();
// console.log(dc.ultimoValor());
// dc.mostrar();
// dc.pop();
// dc.mostrar();
// console.log(dc.ultimoValor());

dc.mostrar();
dc.push('dulce');
dc.push('placencia');
dc.mostrar();

//
// ejemplo cola 
//

// class cola {

//     constructor() {
//         this.cola = [];
//     }
//     agregar(valor) {
//         this.cola.push(valor);
//         return this.cola;
//     }
//     eliminar() {
//         return this.cola.pop();
//     }
//     longitud() {
//         return this.cola.length;
//     }
//     vacio() {
//         return this.cola.length == 0;
//     }
//     mostrar() {
//         console.log(this.cola);['lila', 'celeste', 'blanco', 'negro', 'coral'];
//     }
// }

// let prueba = new cola();
// prueba.agregar('lila');
// prueba.agregar('celeste');
// prueba.agregar('blanco');
// prueba.agregar('negro');
// prueba.agregar('coral');
// prueba.mostrar();

// prueba.eliminar();
// prueba.mostrar();


// console.log(prueba.longitud()); 4
// console.log(prueba.vacio()); false


// //
// // ejemplo matrices
// //

// let test = [20, 'okay', 1, 2, ""];
// console.log(test[1]); // [20 , 'okay' , 1 , 2 , ""];
// console.log(test.length);
// (test.push('mia'));
// console.log(test);
// (test.push('bombom'));
// console.log(test);
// console.log(test);
// test.pop( );
// console.log(test);


// let mari = [ 12 , 'ademir ', 11 , 'salome', ""];
// console.log(mari);
// console.log(mari.length);
// console.log(mari);
// mari.pop( );
// console.log(mari);
// (mari.push('salome'));
// console.log(mari);
// (mari.push('jose'));
// console.log(mari);


// let yo = [ 13 , 'dudu', 10 , "" ] ;
// console.log(yo);
// console.log(yo.length);
// (yo.push('chanchis'));
// console.log(yo);
// (yo.push('beba'));
// console.log(yo);
// console.log(yo);
// yo.pop( );
// console.log(yo);

//
//  ejemplo arbol
//

// let a = new Arbol(1000000);
// let b = new Arbol(99);
// let c = new Arbol(100);
// let d = new Arbol(676);
// let e = new Arbol(2);

// console.log (a);
// console.log (b);
// console.log (c);
// console.log (d);
// console.log (e);

