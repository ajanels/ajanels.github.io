const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/proyectos', (req, res) => {
  res.render('proyectos');
});

app.get('/ajedrez', (req, res) => {
  res.render('ajedrez');
});

app.get('/di', (req, res) => {
  res.render('di'); 
});

app.get('/analizador', (req, res) => {
  res.render('analizador'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
});

app.get('/integrales', (req, res) => {
  res.render('integrales'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
});

app.get('/HERAMIENTA-DE-CONTROL', (req, res) => {
  res.render('HERAMIENTA-DE-CONTROL'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
});

app.get('/integrales', (req, res) => {
  res.render('integrales'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
});


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
