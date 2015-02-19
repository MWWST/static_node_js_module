module.exports=function(request,response){
	var http = require('http');
	var fs = require('fs');
	var path=require('path');
	var extname = path.extname(filePath);
	var filePath = __dirname+'/views' + request.url;
		console.log(request.path);
		if (request.path ===  '/private'){
			console.log('no no no');
		}

		if (request.url ==='/'){
				filePath= __dirname+'/views/cars.html';
				console.log('yo');
			}
		else if (!(path.extname(filePath))) {
			filePath=__dirname+'/views' + request.url+'.html';
		}

		else if (path.extname(filePath) === '.css'){
			filePath=__dirname+'/stylesheets' + request.url;
		}
		else if (path.extname(filePath) === '.jpg' || (path.extname(filePath) === '.png') || 
		(path.extname(filePath) === '.jpeg') || (path.extname(filePath) === '.gif')) {
			filePath=__dirname+'/images' + request.url;
		}
	var contentType= 'text/html';
	switch (extname){
		case '.js':
			contentType ='text/javascript';
			break;
		case '.css':
		contentType = 'text/css'
			break;
		case '.jpg':
		contentType = 'image/jpg'
			break;
			case '.jpeg':
		contentType = 'image/jpeg'
			break;
			case '.png':
		ContentType='image/png'
			case '.gif':
		ContentType='image/gif'
			break;
	}
	if(request){
		fs.readFile(filePath, function (errors, contents){
			if (errors){
				console.log(errors);
				response.writeHead(500);
				response.end();
			}
			else {
				response.writeHead(200, {'Content-Type': contentType});
				response.end(contents, 'utf-8');
			}
		});
	}
};
		

			 