import { parse } from "querystring";
import * as data from "./data.js";
import http from 'http';
//import fs from 'fs';

http.createServer(function(request, response) {
var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddresponses;
var url = request.url;
let urls = request.url.split("?");  // separate route from query string
let path = urls[0].toLowerCase(); // Get Part of the path for case
console.log(path);
switch(path) {

    case "/": // Default page now with JSON
        response.writeHead(200, {'Content-Type': 'text/html'}); // Return 200 - found it - html is ok
        let doggy = data.getAll(); // get all from doogies
        response.write("<table style='border:1px solid black;'><tr style='font-weight:bold;border:1px solid black;'><td>Name:</td><td>Breed:</td><td>Age:</td><td>Height:</td><td>Weight:</td>");
        for(let i=0;i<doggy.length;i++) {
            response.write('<tr style="border: 1px solid black">');
            response.write('<td>'+ doggy[i].name + '</td><td>' + doggy[i].breed + "</td><td>" + doggy[i].age + "</td><td>"+ doggy[i].height + "</td><td>"+ doggy[i].weight + "</td>");
            response.write("</tr>");
        }
        response.write("</table>");
        response.end(); 
        break;

    case '/about': // About Jeremy Page
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1> Hello My name is Jeremy Ward</h1>'); 
        response.write('<p> Welcome to my website ! Share and enjoy! </p>'); 
        response.end(); 
        break;
      case '/get': // Our get method 
        if (request.method == "GET") {
            response.writeHead(200, {'Content-Type': 'text/html'});
            let query = request.url.split("?");
            if (data.getItem(query[1])) {
               response.write(JSON.stringify(data.getItem(query[1])));
            }
            else {
                response.end('Page Not found Please Try Again!'); 
            }
            response.end();
        } 
        break;
    default:
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write("<h1>404 Page Not Found</h1>");
        response.end();
  }

}).listen(3000);