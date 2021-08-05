const express = require('express');
let router = express.Router();
let productos = [];

router.get('/leer', (req, res) => {

    if(productos.length === 0){
      return res.status(404).json({
        error: "no hay productos cargados",
      });
    }
    
    res.json({
      data: productos
    });
    });

    

router.post('/guardar' , (req, res) =>{
    const body = req.body;
    console.log(body);
  
    if (!body.nombre ||
        !body.precio ||
        !body.thumbnail ||
        typeof body.nombre != 'string' ||
        typeof body.precio != 'number' ||
        typeof body.thumbnail != 'string'){
  
          res.status = 400;
  
          return res.json({
            msg: "ingresaste los datos del producto mal"
          })
        }
        const nuevoProducto = {
          id: productos.length + 1,
          nombre: body.nombre,
          precio: body.precio,
          thumbnail: body.thumbnail
        }
        
        productos.push(nuevoProducto);
  
        res.status(201).json({
          data: nuevoProducto
        })
  });

router.put('/actualizar/:id', (req, res) =>{
  
  const idBuscado = req.params.id;
  const body = req.body;
  const producto = productos.find((aProduct) => aProduct.id == idBuscado);

  producto.nombre = body.nuevonombre;
  producto.precio = body.nuevoprecio;
  producto.thumbnail = body.nuevothumb;


  res.json({
    data: producto
  });
});

router.delete('/borrar/:id' , (req, res) => {

  const idBuscado = req.params.id;
  const producto = productos.find((aProduct) => aProduct.id == idBuscado);

  if (productos.includes(producto)){
    const indice = productos.indexOf(producto)
    if( indice > -1) {
        productos.splice(indice, 1)
        console.log("ok");
        // console.log(productos);
    }
} else {
    console.log("bad");
}

 if (!producto) {
   return res.status(404).json({
       msg: 'No existe un producto con este id',
     });
  }
  res.json({
    data: producto
  });
  });

    module.exports = router;