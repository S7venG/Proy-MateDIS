import requests

# Tu clave de API de Google Maps
api_key = 'TU_CLAVE_DE_API'

# Coordenadas de tu ubicación (ejemplo: latitud y longitud de un lugar)
origen = 'latitud,longitud'  # Ejemplo: 40.712776,-74.005974 (Nueva York)
# Coordenadas del destino (ejemplo: latitud y longitud del destino)
destino = 'latitud,longitud'  # Ejemplo: 34.052235,-118.243683 (Los Ángeles)

# URL de la API de Directions
url = f"https://maps.googleapis.com/maps/api/directions/json?origin={origen}&destination={destino}&key={api_key}"

# Realizamos la solicitud
response = requests.get(url)

# Verificamos que la respuesta haya sido exitosa
if response.status_code == 200:
    directions = response.json()
    
    # Si hay rutas disponibles
    if directions['status'] == 'OK':
        # Tomamos el primer trayecto (puede haber múltiples rutas)
        ruta = directions['routes'][0]
        print("Ruta más corta:")
        for step in ruta['legs'][0]['steps']:
            print(step['html_instructions'])  # Instrucciones de cada paso
    else:
        print(f"Error al obtener direcciones: {directions['status']}")
else:
    print(f"Error en la solicitud: {response.status_code}")
