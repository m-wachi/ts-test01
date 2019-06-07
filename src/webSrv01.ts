import * as http from "http";
import * as path from "path";


var requestHandler = function (
    req: http.IncomingMessage,
    res: http.ServerResponse): void {
	
	res.write('Hello Node.js with TypeScript!');
	const sUrl = decodeURI(req.url);
	console.log("req.url [" + sUrl + "]");
	res.end();
    };

const server: http.Server = http.createServer(requestHandler);

server.listen(8080);