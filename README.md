# Descripción
*Zimple Blockchain* es un proyecto que nos ayudará a comprender conceptos como Bloks, Mining, Hashing  en un 
entorno **blockchain**  y por otro lado utilizar Node.js + Typescript para implementar un blockchain de una manera sencilla.

## Requerimientos
1. Tener Docker instalado

## Stack
- Docker
- Nodejs + Typescript
- Express.js
- Mariadb
- React.js

## Commandos backend

1. `docker-compose up --build -d` compila y inicia el proyecto.
2. `docker-compose down` detiene el proyecto.
4. `docker-compose up -d` inicia el proyecto (no compila).
3. `docker-compose down -v` detiene el proyecto y limpia la base de datos.


## Ejercicio #1: Proyecto Backend

El objetivo de este ejecicio es construir un API utilizando **Express.js** que nos permita
agregar y obtener bloques.

Por otro lado, utilizaremos **mariadb** para persistir el blockchain.

1. Ver el video https://www.youtube.com/watch?v=_160oMzblY8&t=2s hasta el minuto 9:15 (Blockchain) para entender conceptos como: Block, Mining y Blockchain.

2. Implementar el metodo **mine**
    - El hash del bloque se debe componer de un string con la siguiente estructura: `const hash = SHA256(id + data + previousHash + nonce)`.
    - Como se explica en el video, se debe ir iterando (incrementando el 'nonce') hasta encontrar un hash que cumpla con el requerimiento especificado.
    - Requerimiento: **El hash debe comenzar con 2 ceros Ejemplo: '00......'**
    - Se debe utilizar SHA256. https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/.

3. Implementar el servicio *addBlock* encontrado en el archivo *services/addBlock.ts*.
    - Se debe de construir el bloque segun la interface *Block.ts* encontrada en *models/Block.ts*.
    - Se debe hacer un llamado al método "mine" para obtener el hash del bloque.
    - El blockId debe ser un autogenerado utilizando la libreria "cuid". Ejemplo: `const blockId = cuid()`.
    - Se debe guardar el bloque utilizando el adapter brindado.
    - Crear un commit de este paso y hacer un PR.

4. Implementar un nuevo db adapter para añadir persistencia.
    - Se debe implementar la clase llamada MariaDbAdapter.ts en la carpeta "adapters".
    - La clase se debe conectar a mariadb para guardar y obtener los bloques.
    - Los datos de conexion son los siguientes: 
    ```typescript
        const pool = mariadb.createPool({
            host: "database", 
            user: "root", 
            password: "",
            database: "blockchaindb"
        });
    ```
    - Se debe remplazar el InMemoryDbAdapter por el MariaDbAdapter en el archivo **server.ts**

5. Implementar el metodo servicio **verify**
    - El servicio verify deberá recorrer el blockchain y verificar que cada una de los bloques es válido.
    - Para que un bloque sea válido debe cumplir las siguiente condiciones:
        1. SHA256(block.id + block.data + block.previousHash + block.nonce)` === block.hash
        2. block.prevHash  === prevBlock.hash

4. Describir en este espacio una posible manera de corromper el blockchain.
   - Explicación:

## Ejercicio #2: Proyecto Frontend
1. Crear una aplicación en React que permita visualizar, agregar los bloques y verificar la validez del blockchain.
    - El diseño del app es libre.
    - Se debe de utilizar *React Hooks*.
    - Se debe utilizar *fetch* para comunicarse con el backend.
    - Se debe utilizar *CSS grids* para construir los bloques.
    - La aplicación debe ser responsive.

## Ejerciio #3 UTXO (proximamente)
    
## Referencias 
https://blog.baudson.de/blog/stop-and-remove-all-docker-containers-and-images
https://github.com/Yengas/nodejs-docker-bootstrap
https://www.youtube.com/watch?v=IJquEYhiq_U
https://www.youtube.com/watch?v=_160oMzblY8&t=2s