// Clase base para las figuras geométricas
class Figura {
    calcularArea(): number {
        return 0;  // Método base que será sobreescrito en las subclases
    }
    
    calcularVolumen(): number {
        return 0;  // Método base que será sobreescrito en las subclases 3D
    }
}

// Clase Rectángulo
class Rectangulo extends Figura {
    private largo: number;
    private ancho: number;

    constructor(largo: number, ancho: number) {
        super();
        this.largo = largo;
        this.ancho = ancho;
    }

    calcularArea(): number {
        return this.largo * this.ancho;
    }
}

// Clase Pentágono
class Pentagono extends Figura {
    private lado: number;
    private apotema: number;

    constructor(lado: number, apotema: number) {
        super();
        this.lado = lado;
        this.apotema = apotema;
    }

    calcularArea(): number {
        const perimetro = 5 * this.lado;
        return (perimetro * this.apotema) / 2;
    }
}

// Clase Circunferencia
class Circunferencia extends Figura {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

// Clase base para figuras 3D, que extiende de Figura
class Figura3D extends Figura {
    calcularVolumen(): number {
        return 0;  // Método base para volumen en figuras 3D
    }
}

// Clase Prisma Rectangular que hereda de Figura3D
class PrismaRectangular extends Figura3D {
    private largo: number;
    private ancho: number;
    private altura: number;

    constructor(largo: number, ancho: number, altura: number) {
        super();
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
    }

    calcularArea(): number {
        return 2 * (this.largo * this.ancho + this.largo * this.altura + this.ancho * this.altura);
    }

    calcularVolumen(): number {
        return this.largo * this.ancho * this.altura;
    }
}

// Clase Prisma Pentagonal que hereda de Figura3D
class PrismaPentagonal extends Figura3D {
    private lado: number;
    private apotema: number;
    private altura: number;

    constructor(lado: number, apotema: number, altura: number) {
        super();
        this.lado = lado;
        this.apotema = apotema;
        this.altura = altura;
    }

    calcularArea(): number {
        const perimetro = 5 * this.lado;
        const areaBase = (perimetro * this.apotema) / 2;
        return 2 * areaBase + perimetro * this.altura;
    }

    calcularVolumen(): number {
        const areaBase = (5 * this.lado * this.apotema) / 2;
        return areaBase * this.altura;
    }
}


class Cilindro extends Figura3D {
    private radio: number;
    private altura: number;

    constructor(radio: number, altura: number) {
        super();
        this.radio = radio;
        this.altura = altura;
    }

    calcularArea(): number {
        const areaLateral = 2 * Math.PI * this.radio * this.altura;
        const areaBase = 2 * Math.PI * this.radio ** 2;
        return areaLateral + areaBase;
    }

    calcularVolumen(): number {
        return Math.PI * this.radio ** 2 * this.altura;
    }
}



const rectangulo = new Rectangulo(4, 5);
console.log("Área del rectángulo:", rectangulo.calcularArea());

const pentagono = new Pentagono(3, 4);
console.log("Área del pentágono:", pentagono.calcularArea());

const circunferencia = new Circunferencia(3);
console.log("Área de la circunferencia:", circunferencia.calcularArea());

const prismaRectangular = new PrismaRectangular(4, 5, 6);
console.log("Área del prisma rectangular:", prismaRectangular.calcularArea());
console.log("Volumen del prisma rectangular:", prismaRectangular.calcularVolumen());

const prismaPentagonal = new PrismaPentagonal(3, 4, 5);
console.log("Área del prisma pentagonal:", prismaPentagonal.calcularArea());
console.log("Volumen del prisma pentagonal:", prismaPentagonal.calcularVolumen());

const cilindro = new Cilindro(3, 7);
console.log("Área del cilindro:", cilindro.calcularArea());
console.log("Volumen del cilindro:", cilindro.calcularVolumen());

