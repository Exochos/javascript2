const { response } = require("express");
var http = require("http");

http.createServer(function(request, response) {
  var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddresponses;

  var url = request.url;
    if(url === "/") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("<h1>Welcome to Jeremy's Index Page</h1>");
        response.end();
    }
    else if(url ==='/about') {
      response.write(' Welcome to about us page'); 
      response.end(); 
   } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Not found'); 
   }
}).listen(3000);