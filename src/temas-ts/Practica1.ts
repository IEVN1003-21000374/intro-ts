

class EcuacionCuadratica:
    def __init__(self, a, b, c):
        self.a = a  # Coeficiente de x^2
        self.b = b  # Coeficiente de x
        self.c = c  # Término independiente
    
    def calcular_discriminante(self):
        # Discriminante: b^2 - 4ac
        return self.b ** 2 - 4 * self.a * self.c
    
    def calcular_raices(self):
        discriminante = self.calcular_discriminante()
        
        if discriminante > 0:
            # Dos raíces reales
            raiz_1 = (-self.b + math.sqrt(discriminante)) / (2 * self.a)
            raiz_2 = (-self.b - math.sqrt(discriminante)) / (2 * self.a)
            return (raiz_1, raiz_2)
        elif discriminante == 0:
            # Una raíz real (doble)
            raiz = -self.b / (2 * self.a)
            return (raiz,)
        else:
            # No hay raíces reales
            return None

# Ejemplo de uso:
ecuacion = EcuacionCuadratica(1, -3, 2)
raices = ecuacion.calcular_raices()

if raices:
    print(f"Las raíces de la ecuación son: {raices}")
else:
    print("No hay raíces reales.")
