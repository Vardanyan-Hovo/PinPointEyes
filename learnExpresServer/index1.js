import express from "express";
import session from "express-session";


const app = express();

// app.use(session({secret: 'keyboard cat',
//                  cookie: {maxAge: {maxAge: 60000}}}));


//login functions
app.use(session({secret: 'k234iubi2u3b4iu2b34iu2b34i',      //create secret
cookie: {maxAge: {maxAge: 60000}}}));                       //ֆոր cookie




app.use(express.static("public"));          //if search "/public/*" have return file
                                            //else next();


app.use(express.json());                    //instead of 
                                            //req.on("Data",()=>{}); 
                                            //req.on("End", ()=>{})  


//how many times have you logged into this page?
app.get("/", (req, res) => {
    if (req.session.view === undefined)
    {
        req.session.view = 1;
    }
    else{
        req.session.view++;
    }
    res.send(`Number of views ${req.session.view}`);
});

console.log(process.env);// c++ main(int argc, char *argv[], char **env)
app.listen(3001);
