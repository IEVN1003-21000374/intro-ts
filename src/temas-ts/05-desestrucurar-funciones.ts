

export interface Producto{
    desc:string;
    precio:number;
}

const tablet:Producto={
    desc: 'Samsumg',
    precio: 7642
}

const telefono:Producto={
    desc: 'OPPO',
    precio: 9042
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((Producto)=>{
        total+Producto.precio
    })
    return total*0.16;
}

const articulo1=[telefono, tablet];
const iva1=calcularIVA(articulo1)
console.log(` IVA ${iva1}`)

export function calcularIVA2(productos:Producto[]):[number, number]{
    let total = 0;
    productos.forEach(({precio}) =>{
        total+=precio
    });
    return[total,total*0.16];
    
}

const articulo2=[telefono, tablet];
const[total , iva2]= calcularIVA2(articulo2)
console.log(` IVA ${total}`)
console.log(` IVA ${iva2}`)