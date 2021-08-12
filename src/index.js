const express = require('express'); 
const path = require('path');
const rutas = require('./routes/rutas.js');
const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});






// const borrar = require('./routes/borrar');
// const actualizar = require('./routes/actualizar');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api/rutas', rutas);