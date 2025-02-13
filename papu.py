import math

# Pedir al usuario el radio del círculo
radio = float(input("Introduce el radio del círculo: "))

# Calcular el área usando la fórmula A = pi * r^2
area = math.pi * radio ** 2

# Mostrar el resultado
print(f"El área del círculo con radio {radio} es: {area:.2f}")
