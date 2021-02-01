# Descripción
*Zimple Blockchain* es un proyecto que nos ayudará a comprender lo que es un blockchain.

Requerimientos
1. Tener Docker instalado

Stack
- Docker
- Nodejs + Typescript
- Express.js
- React.js

## Commandos backend

1. `docker-compose up --build -d` compila y inicia el proyecto.
2. `docker-compose down` detiene el proyecto.
3. `docker-compose down -v` detiene el proyecto y limpia la base de datos.


## Ejercicio #1 Backend

El objetivo de este ejecicio es construir un API que nos permita
agregar y obtener bloques.

1. Ver el video https://www.youtube.com/watch?v=_160oMzblY8&t=2s hasta el minuto 9:15 (Blockchain) para entender conceptos como: Block, Mining y Blockchain.


2. Implementar el servicio *addBlock* encontrado en el archivo *services/addBlock.ts*.
    - Se debe de construir el bloque segun la interface *Block.ts* encontrada en *models/Block.ts*.
    - Se debe hacer un llamado al método "mine" para obtener el hash del bloque.
    - El blockId debe ser un autogenerado utilizando la libreria "cuid". Ejemplo: `const blockId = cuid()`.
    - Se debe guardar el bloque utilizando el adapter brindado.

3. Implementar el metodo "mine"
    - El hash del bloque se debe componer de un string con la siguiente estructura: `const hash = SHA256(id + data + previousHash + nonce)`.
    - Como se explica en el video, se debe ir iterando (incrementando el 'nonce') hasta encontrar un hash que cumpla con el requerimiento especificado.
    - Requerimiento: **El hash debe comenzar con 2 ceros Ejemplo: '00......'**
    - Se debe utilizar SHA256. https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/.

4. Crear un nuevo db adapter para añadir persistencia.
    - Se debe crear una clase llamada MariaDbAdapter.ts que implemente ports/DbPort.ts y que se conecte con la instancia de mariadb configurada en el docker-compose.yml.
    - Los tados de conexion son los siguientes: 
    ```typescript
        const pool = mariadb.createPool({
            host: "database", 
            user: "root", 
            password: "",
            database: "blockchaindb"
        });
    ```

## Ejercicio #2 Frontend
1. Crear una aplicación en React que permita visualizar y agregar los bloques.
    - El diseño del app es libre.
    - Se debe de utilizar *React Hooks*.
    - Se debe utilizar *fetch* para comunicarse con el backend.
    - Se debe utilizar *CSS grids* para construir los bloques.
    - La aplicación debe ser responsive.
    
