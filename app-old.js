const http = require('http');

http.createServer((req, res) => {
    let result = {
        name: 'Mauricio',
        age: 28,
        url: req.url
    }
    //convierte la forma de leer del objeto en formato json
    res.write(JSON.stringify(result));
    res.end();

}).listen(8080);
console.log("Listen in port 3000");