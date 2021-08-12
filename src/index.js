const express = require('express'); 
const path = require('path');
const handlebars = require('express-handlebars');
const rutas = require('./routes/rutas.js');
const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
const publicFolderPath = path.resolve(__dirname, '../public');
app.use(express.static(publicFolderPath));
const layoutFolderPath = path.resolve(__dirname, '../views/layouts');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: layoutFolderPath,
}));


app.get('/', (req, res) =>{

  res.render('main', {layout:'index.hbs'})
});







// const borrar = require('./routes/borrar');
// const actualizar = require('./routes/actualizar');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/rutas', rutas);