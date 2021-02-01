# Descripción
*Zimple Blockchain* es un proyecto que nos ayudará a comprender lo que es un blockchain.

Stack
- Nodejs + Typescript
- Express.js
- React.js

## Ejercicio #1 Backend
1. Ver el video https://www.youtube.com/watch?v=_160oMzblY8&t=2s hasta el minuto 9:15 (Blockchain) para entender conceptos como: Block, Mining y Blockchain.


2. Implementar el servicio *addBlock* encontrado en el archivo *services/addBlock.ts*.
    - Se debe de construir el bloque segun la interface *Block.ts* encontrada en *models/Block.ts*.
    - Se debe hacer un llamado al método "mine" para obtener el hash del bloque.
    - El blockId debe ser un autogenerado utilizando la libreria "cuid". Ejemplo: `const blockId = cuid()`.
    - Se debe guardar el bloque utilizando el adapter brindado.

3. Implementar el metodo "mine"
    - Como se explica en el video, se debe incrementar el un número llamado 'nonce' hasta encontrar un hash que cumpla con el requerimiento especificado.
    - El hash debe cumplir con el siguiente requerimiento:  Debe comenzar con 3 ceros. Ejemplo: '000......'
    - El hash del bloque se debe componer de (id + data + previousHash + nonce).
    - Se debe utilizar SHA256. https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/.

## Ejercicio #2 Frontend
1. Crear una aplicación en React que permita visualizar y agregar los bloques.
    - El diseño del app es libre.
    - Se debe de utilizar *React Hooks*.
    - Se debe utilizar *fetch* para comunicarse con el backend.
    - Se debe utilizar *CSS grids* para construir los bloques.
    
