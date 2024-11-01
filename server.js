const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Establecer el motor de vistas
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'views'));

// Registrar la carpeta de partials
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index',{
    nombre: "CHRISTIAN TOMÁS AJANEL AJANEL",
    
  });
});

app.get('/proyectos', (req, res) => {
  res.render('proyectos');
});

app.get('/webservice', (req, res) => {
  res.render('webservice');
});
app.get('/portafolio', (req, res) => {
  res.render('portafolio');
});

app.get('/ajedrez', (req, res) => {
  res.render('ajedrez');
}); 

app.get('/di', (req, res) => {
  res.render('di'); 
});

app.get('/analizador', (req, res) => {
  res.render('analizador'); 
});

app.get('/integrales', (req, res) => {
  res.render('integrales'); 
});

app.get('/HERAMIENTA-DE-CONTROL', (req, res) => {
  res.render('HERAMIENTA-DE-CONTROL'); 
});

app.get('*', (req, res) => {
  res.status(404).render('404'); 
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
