var http = require('http');





http.createServer(function(req, res){
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("VOCE ENCONTROU A PAGINA PREMIADA!! :D");

 res.end();
}).listen(Math.floor(Math.random() * 11) + 1);
