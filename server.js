var http = require{'http'};
function on Request(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end();
}

http.createServer(onRequest).listen(8000);
