import {createServer} from 'http'
import fs from "fs"
import path from "path"


const server = createServer((req, res)=>{
    if (req.url === '/')
    {
        res.writeHead(200,{'Content-Type': 'text/html'});
        // res.end("Welcome to my website");
        fs.createReadStream(path.resolve("public/index.html"))
                    .pipe(res);                 //C/C++ dup2(1, res)
                                                //      dup(0, index.html)
    }
    else if (req.url === '/style.css')
    {
        res.writeHead(200,{'Content-Type': 'text/css'});
        fs.createReadStream(path.resolve("public/index.css"))
                    .pipe(res);                 //C/C++ dup2(1, res)
                                                //      dup(0, index.css)
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