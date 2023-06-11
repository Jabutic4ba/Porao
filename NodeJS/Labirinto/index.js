var http = require('http');

http.createServer(function(req, res){
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('Bem vindo ao labirinto!');
 res.end('Resolva os desafios e encontre a porta secreta com o tesouro.<br><br> Cuidado em sua aventura, nao sabe o que pode encontrar!<br><br> Sera que e bom o bastante?');
}).listen(8080);


//preciso saber como acessar paginas diferentes