const http= require("http");
const datetime = require("./date.js");

http.createServer(function(req,res){
    let fecha = `la hora es: ${datetime.myDateTime()}`
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write(fecha)
    res.end();

}).listen(8080);