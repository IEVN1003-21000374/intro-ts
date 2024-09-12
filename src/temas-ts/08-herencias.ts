class Persona3{
    protected nombre: string;
    protected edad: number;
    constructor(nombre: string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
 
    }
}
 
class Empleado extends Persona3{
    private sueldo: number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad);
        this.sueldo=sueldo
    }
    imprimir(){
        console.log(`Sueldo ${this.sueldo}`)
    }
    pagarImpuesto(){
        if(this.sueldo>5000){
            console.log(`${this.nombre} debes pagar impuestos NOW`)
        }
        else{
            console.log(`${this.nombre} no debe pagar impuestos`)
        }
    }
}
 
const persona3=new Persona3('Juan', 34);
persona3.imprimir();
 
const empleado3=new Empleado('Ana', 22, 7000);
empleado3.imprimir();
empleado3.pagarImpuesto();