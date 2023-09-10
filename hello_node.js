var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!');
 }).listen(8080);

 anime({
    targets: 'div',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });