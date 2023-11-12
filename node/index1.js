import {createServer} from "http"

const server = createServer((req, res)=>{
    if (req.url === '/')
    {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("Welcome to my website");
    }
    else if (req.url === "/hello")
    {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("hello world");
    }
    else if (req.url === "/bye")
    {
        res.writeHead(200,{'Content-Type': 'application/plain'});
        res.end(JSON.stringify({
            name: "Joe"    
        }));
    }
    else {
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end("Data not found");
    }
});


server.listen(3001);