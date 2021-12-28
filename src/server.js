require('dotenv').config();
var APP_PORT = process.env.PORT || 3000;
var DB_URL   = process.env.DB_URL;

var express    = require('express');
var apiRouter  = require('./api/routes/api');
var mongoose   = require('mongoose');

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Conectado a %s', DB_URL);
  })
  .catch(err => {
    console.error('No se pudo conectar a la BD: ', err.message);
    process.exit(1);
  });

var app = express();

app.use(express.json());
app.use('/api/', apiRouter);
app.all('*', function(req, res) {
  res.status(404).send('No encontrado.');
})

app.listen(APP_PORT);

console.log(`API disponible en el puerto ${APP_PORT}`);
