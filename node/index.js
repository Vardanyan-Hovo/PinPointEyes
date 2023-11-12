import {createServer} from 'http'
import fs from "fs"
import path from "path"

const MyType = {
    ".hetl" : "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript"
};


function fileMiddleware(req, res, next){

    let url = req.url;
    if (url === "/")
    {
        url = "/index.html";
    }


    const filePath = path.resolve("public" + url);
    //path.resolve === "/user/desktop/node"
    // "/user/desktop/node" + "public" +  req.url
    //example
    // "/user/desktop/node" + "public" + "/home"
    fs.promises.access(filePath)// c/c++ access similar search file
        .then(()=>{
            
           const ext =  path.extname(filePath);//filePath  find what is its extension?
            res.writeHead(200,{'Content-Type': MyType[ext]});  
            
            
            fs.createReadStream(path.resolve("public/index.html"))
                    .pipe(res);                 //C/C++ dup2(1, res)
                                                //      dup(0, .html)
        })
        .catch(()=>{
            next();
        })
}


const server = createServer((req, res)=>{
    fileMiddleware(req, res, ()=>{
        if (req.url === "/hello")
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
    })

});


server.listen(3001);