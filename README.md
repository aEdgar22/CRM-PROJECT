# ¡Bienvenido al proyecto CRM! Aquí encontrarás toda la información necesaria para poner en marcha tanto el frontend como el backend de la aplicación.

Iniciar la aplicación
Para iniciar tanto el frontend como el backend, debes ejecutar el siguiente comando en la terminal:

    - npm run dev
    
Este comando se encargará de iniciar tanto el servidor backend como el servidor frontend de manera simultánea.

# Configuración de la base de datos
Antes de iniciar la aplicación, asegúrate de tener una base de datos MySQL local configurada correctamente. Deberás crear una base de datos llamada crm_database.

A continuación, en la raíz del directorio backend, asegúrate de tener un archivo llamado .env que contendrá la configuración necesaria para conectarse a la base de datos. El contenido del archivo .env debe ser el siguiente:

 - DB_HOST=localhost
- DB_PORT=3306
 - DB_NAME=crm_database
- DB_USER=tu_usuario_de_mysql
- DB_PASSWORD=tu_contraseña_de_mysql
- PORT=4000

# ¡Listo para usar!
Una vez que hayas completado los pasos anteriores, podrás iniciar la aplicación CRM ejecutando el comando npm run dev. Esto pondrá en marcha tanto el frontend como el backend, y podrás acceder a la aplicación desde tu navegador web visitando http://localhost:4000.
## Authors

- [@aEdgar22](https://github.com/aEdgar22)
- [@Paulab3008](https://github.com/Paulab3008)

