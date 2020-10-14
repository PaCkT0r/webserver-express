const express = require("express");
const app = express();

const hbs = require('hbs');

require('./hbs/helpers')

//Variables de entorno globales para oobtener el puerto de escucha
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Express hbs
hbs.registerPartials( __dirname + '/views/parciales');
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  //res.send('Hola Mundo')
  res.render("home", {
    nombre: "donaldo LUNA"
  });
});

app.get("/about", function (req, res) {
    res.render("about");
});

/*app.get('/data', function (req, res) {
    res.send('Hola data');
  });*/

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`);
});


/**
 * El helper de hbs es una función que se dispara cuando el template lo requiere
*/
