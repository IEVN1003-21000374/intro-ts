
function sumar(){
    let sumar= 0;
    for(let i = 0; i < 10; i++){
        sumar += i;
    }
      
console.log(sumar);   
}
sumar();

function resta(a:number, b:number):number{
    return a-b;
}
console.log(10, 5);

interface Mascotas{
    nombre: string,
    edad: number,
    raza: string,
    mostrarEdad:()=>void;

}

let perro: Mascotas = {
    nombre: 'Fido',
    edad: 3,
    raza: 'Pastor aleman',
    mostrarEdad(){
        console.log(`la edad es ${this.edad}`)
    }

}

function calcular(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota)
}

calcular(perro, 4);
