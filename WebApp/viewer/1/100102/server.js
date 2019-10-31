var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log(req.connection.remoteAddress)
  res.write('Hello World!');
  res.end();
}).listen(8080);