let persona = {
    nombre: 'dul',
    edad : 16 ,
    carrera : 'alumna'
}

console.log(persona);

let yo = {
nombre: 'mariana',
apellido: 'placencia',
hobit: 'bailar y cantar',
}
console.log(yo);

let perritos = {
  nombre: 'mia',
    nombre1: 'bombom',
    nombre2: 'dudu',
    nombre3: 'chanchis',
    nombre4: 'beba',
    }

    console.log(perritos);
// ===========================
// ******* CREAR OBJETOS *******
// ============================
    //forma1 de crear un objeto

    let persona1 ={};

    //forma2 de crear un objeto 

    let persona2 = new Object();

// ===========================
// ******* AÑADIR UN ATRIBUTOS *******
// ============================

//forma1
persona1.nombre = 'dulce';
persona1.apellido = 'gonzales';
console.log(persona1);
//forma2
persona1 ["edad"] = 16;
console.log(persona1);

// ===========================
// ******* MOSTRAR DATOS *******
// ============================
 
//forma1
console.log(persona1.nombre);
//forma2
console.log(persona1 ["nombre"]);

// ===========================
// ******* ACTUALIZAR DATOS *******
// ============================
 
//forma1
persona1.nombre='mariana';
console.log(persona1);
//forma2
persona1["nombre"] = 'mari' ;
console.log(persona1);

//forma1
persona2.nombre ='ademir';
persona2.apellido = 'chavez';
console.log(persona2);
console.log(persona2.nombre);
persona2.nombre = 'pollito';
console.log(persona2);

//forma2
persona2 ["nombre"] = 'ademir';
persona2["edad"] = 16 ;
console.log(persona2 ["nombre"]);
console.log(persona2["edad"]);
persona2["nombre"] = 'empanadulce';
console.log(persona2);