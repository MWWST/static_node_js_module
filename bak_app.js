// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars") {
         fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }  
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    } else if (request.url === "/cars/new") {
         fs.readFile('./views/cars_new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/skeleton.css") {
         fs.readFile('./stylesheets/skeleton.css', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/LPg_Continental_GT_V8_S_Gallery_Hero1A_1398x699.jpg") {
         fs.readFile('./images/LPg_Continental_GT_V8_S_Gallery_Hero1A_1398x699.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/LPg_Continental_GT_V8_S_Gallery_Hero2A_1398x699.jpg") {
         fs.readFile('./images/LPg_Continental_GT_V8_S_Gallery_Hero2A_1398x699.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/FlyingSpur_V8_Gallery_Hero2_1398x699.jpg") {
         fs.readFile('./images/FlyingSpur_V8_Gallery_Hero2_1398x699.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/LPg_MulsanneSpeed_Gallery_5AA_1398x699.jpg") {
         fs.readFile('./images/LPg_MulsanneSpeed_Gallery_5AA_1398x699.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/2014-SL-CLASS-ROADSTER-101-CCF-DR.jpg") {
         fs.readFile('./images/2014-SL-CLASS-ROADSTER-101-CCF-DR.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/2014-G-CLASS-SUV-009-CCF-DR.jpg") {
         fs.readFile('./images/2014-G-CLASS-SUV-009-CCF-DR.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/2016-AMG-GTS-077-CCF-DR.jpg") {
         fs.readFile('./images/2016-AMG-GTS-077-CCF-DR.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/2014-S-CLASS-SEDAN-092-CCF-DR.jpg") {
         fs.readFile('./images/2014-S-CLASS-SEDAN-092-CCF-DR.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/x6m.jpg") {
         fs.readFile('./images/x6m.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/x5m.jpg") {
         fs.readFile('./images/x5m.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/m5coupe.jpg") {
         fs.readFile('./images/m5coupe.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/CosyVehicleImage.jpg") {
         fs.readFile('./images/CosyVehicleImage.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats1.jpeg") {
         fs.readFile('./images/cats1.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats2.jpeg") {
         fs.readFile('./images/cats2.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats3.jpeg") {
         fs.readFile('./images/cats3.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats4.jpeg") {
         fs.readFile('./images/cats4.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats5.jpeg") {
         fs.readFile('./images/cats5.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats6.jpeg") {
         fs.readFile('./images/cats6.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats7.jpeg") {
         fs.readFile('./images/cats7.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats8.jpeg") {
         fs.readFile('./images/cats8.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats9.jpeg") {
         fs.readFile('./images/cats9.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats10.jpeg") {
         fs.readFile('./images/cats10.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats11.jpeg") {
         fs.readFile('./images/cats11.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }else if (request.url === "/cats12.jpeg") {
         fs.readFile('./images/cats12.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");