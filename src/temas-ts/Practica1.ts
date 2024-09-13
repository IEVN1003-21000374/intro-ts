class EcuacionCuadratica {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    
    public calcularRaices(): void {
        const discriminante = this.b ** 2 - 4 * this.a * this.c;
        
        if (discriminante > 0) {
            const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`La ecuación tiene dos raíces reales: x1 = ${x1}, x2 = ${x2}`);
        } else if (discriminante === 0) {
            const x = -this.b / (2 * this.a);
            console.log(`La ecuación tiene una única raíz real: x = ${x}`);
        } else {
            console.log("La ecuación no tiene raíces reales.");
        }
    }

    
    public imprimirCoeficientes(): void {
        console.log(`Coeficientes: a = ${this.a}, b = ${this.b}, c = ${this.c}`);
    }
}


const ecuacion1 = new EcuacionCuadratica(1, -3, 2);
ecuacion1.imprimirCoeficientes();  
ecuacion1.calcularRaices();        


const ecuacion2 = new EcuacionCuadratica(1, 2, 5);  
ecuacion2.imprimirCoeficientes();
ecuacion2.calcularRaices();
