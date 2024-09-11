interface Alumno{
    nombre:string;
    edad:number;
    email: string;
    calificacion?:number;
}




const aumo={
    nombre:'mario',
    edad:23,
    email:'mario@gmail.com',
    
}

console.table(aumo)

let mascotas=['perro', 'gato', 'perico']
mascotas[1]='Nuevo gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);
