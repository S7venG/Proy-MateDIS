import sqlite3 

try: 
    mi_conexion = sqlite3.connect('Usuarios.db')
    cursor = mi_conexion.cursor()
    cursor.execute("SELECT * FROM hospitales")
    rows = cursor.fetchall()
    for row in rows:
        print(row)  
except Exception as ex:
    print("Error: ", ex)