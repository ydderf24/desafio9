const express = require('express'); 
const app = express();
const port = 8080;
const rutas = require('./routes/rutas.js');
// const borrar = require('./routes/borrar');
// const actualizar = require('./routes/actualizar');
// 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/api/rutas', rutas);
// app.use('/api/borrar', borrar);
// app.use('/api/actualizar', actualizar);


// app.get('/api/productos/listar/:id' , (req, res) => {

//   const idBuscado = req.params.id;

//   const producto = productos.find((aProduct) => aProduct.id == idBuscado);

//   if (!producto) {
//     return res.status(404).json({
//       msg: 'No existe un producto con este id',
//     });
//   }

//   res.json({
//     data: producto,
//   });
//   })