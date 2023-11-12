import express  from "express";
import path, { join } from "path"


const app = express();

app.use(express.static("public"));//caled midelver



//when call http://localhost:3001/style.css
//go to public directory and search style.css file
//if note find next()

// app.use((req, res, next)=>{
     
//     console.log("ok");
//     next();
// })
// app.get("/", (req,res)=>{
//     res.sendFile(path.resolve("public/index.hml"));  `
// })




app.get("/", (req, res) => {
    req.redirect("./index.html");
});        

app.get("/hello", (req, res) => {
    res.send("Yay");
})    

app.get("/bye", (req, res) => {
    res.send({
        name: "Joe"
    });    
})    



app.post("/hi", (req,res) =>{
    let data = "";
    req.on("data", (info)=>{
        data += info;
    })
    req.on("end", () =>{
        const obj = JSON.parse(data);
        console.log(obj.name);
        res.send("All ok ");
    })
})

app.listen(3001);

