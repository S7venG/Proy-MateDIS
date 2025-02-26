import requests

# Usamos otro servicio, ip-api
response = requests.get('http://ip-api.com/json')

if response.status_code == 200:
    data = response.json()
    print(f"IP: {data['query']}")
    print(f"Ciudad: {data['city']}")
    print(f"País: {data['country']}")
    print(f"Ubicación: {data['lat']}, {data['lon']}")
else:
    print(f"Error: {response.status_code}")

