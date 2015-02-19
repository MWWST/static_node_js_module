// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
    
var static_contents = require('./static.js');

var server = http.createServer(function (request, response){
static_contents(request,response);	
	// console.log(my_module);
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // console.log(response);
    // this is how we do routing:
  
    // request didn't match anything:
   
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");