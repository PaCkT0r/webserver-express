const http = require('http');

http.createServer( (request, result) => {

    result.writeHead(200, {'Content-Type': 'application/json' });

    let salida = {
        nomre: 'Donaldo',
        edad: 25,
        url: request.url
    }
    result.write( JSON.stringify(salida));
    //result.write('Hola mundo'); // Al especificar esto no definimos cuando dejara de estar ecuchando.
    result.end(); // Con este damos la indicación de que el servicio esta ecuchando actuvamente.
})
.listen(8080);

console.log('Escuchando el puerto 8080');