const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:false}))

app.use("/superSecretSite.html",(req,res,next)=>{
    if(currentUser){
        next();
    }
    else{
        res.redirect("/login.html")
    }
})

app.use(express.static('public'));

let peeble=[]

let currentUser;

app.use((req,res,next)=>{
    console.log(currentUser);
    next();
})

function htmlS(res){
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`);}
function htmlE(res){
    res.write(`</body>
    </html>`);
    res.end();}

app.post("/register",(req,res)=>{
    for(let i=0;i<peeble.length;i++){
        if(peeble[i].userName===req.body.userName||peeble[i].email===req.body.email){
        htmlS(res);
        res.write('<p>no</p>')
        htmlE(res);
        return;
        }
    }
    peeble.push({userName:req.body.userName, firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email, password:req.body.password})
    currentUser = {userName:req.body.userName, firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email, password:req.body.password};
    console.log(currentUser);
    console.log(peeble);
    res.redirect('/superSecretSite.html');
})

app.post("/login",(req,res)=>{
    console.log(peeble);
    for (let i = 0; i < peeble.length; i++) {
        if(peeble[i].userName===req.body.userName){
            if(peeble[i].password===req.body.password){
                res.redirect('/superSecretSite.html');
                currentUser = peeble[i];
                console.log(currentUser)
                return;
            } 
        };
    };
})

app.get("/logout",(req,res)=>{
    currentUser=undefined;
    res.redirect('/index.html');
})



app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})