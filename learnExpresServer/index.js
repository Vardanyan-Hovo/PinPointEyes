import express from "express";
import session from "express-session";
import path from "path"
import bcrypt from "bcrypt"
import passportLocal from "passport-local"
import passport from "passport";


const app = express();
const users = [];

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized:false
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));// mins struct can by deap

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy({
    usernameField: "email"     // sey Strategy usename email
}, (email, passport, done) => {
    const user = users.find((user)=>user.email === email);

    if (user === undefined){
        //         error obj{}  user obj{}
        return done( null,      null,         {message: "Incorrect email"}   );
    }





}));

//http://localhost:3001/register                  ---Start---
app.get("/Register", (req,res)=>{
    // console.log(path.resolve("views/register.html"));    
    res.sendFile(path.resolve("views/register.html"));

    // res.send("Register")
});

//http://localhost:3001/register                    ---END---
//when submit    <form action="/register" method="post">
//<post    action   >
app.post("/register", async (req,res)=>{
    // console.log(req.body);
    const {name, email, password} = req.body;
    
    //for password by unknown
    const hashedPwd = await bcrypt.hash(password, 10);
    users.push({'name': name,
                'email':email,
                'password':hashedPwd
                });
    res.redirect("/login")
});





app.get("/login",  (req,res)=>{
    res.sendFile(path.resolve("views/login.html"));
});

app.get("/", (req, res) => {
    res.send("hi");
});





app.listen(process.env.Port);
