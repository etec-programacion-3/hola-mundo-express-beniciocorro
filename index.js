/**
 * Archivo de ejemplo para iniciar un servidor web utilizando Express.
 * @module servidor
 */

import express from 'express';

const app = express();

/**
 * Maneja la solicitud GET en la raíz del servidor.
 * @name GET /
 * @function
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * Maneja la solicitud GET en la ruta /saludo/:nombre.
 * @name GET /saludo/:nombre
 * @function
 * @param {Object} req - Objeto de solicitud HTTP con parámetros.
 * @param {string} req.params.nombre - Nombre para saludar.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 */
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

/**
 * Inicia el servidor en el puerto 3000.
 * @function
 * @name listen
 * @param {number} port - Puerto en el cual escuchar las conexiones.
 * @param {Function} callback - Función a ejecutar una vez que el servidor comienza a escuchar.
 * @returns {void}
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
