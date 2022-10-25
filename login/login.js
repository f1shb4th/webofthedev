const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const session = require('express-session')
const fs = require('fs');
const app = express();
const port = 3000;


app.use(session({
    secret: 'real big frog',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false}
}))

app.use(express.urlencoded({extended:false}))

app.use("/superSecretSite.html",(req,res,next)=>{
    console.log(req.session)
    if(req.session.currentUser){
        next()
    }
    else{
        console.log("no user ):")
        res.redirect("/suffer.html")
    }
})

app.use(express.static('public'));
app.use((req,res,next)=>{
    next();
})


let posts = []
let peebleSave = fs.readFileSync('peeble.json', {encoding: "utf-8"});
let peeble = JSON.parse(peebleSave);


function htmlS(res, pageName){
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> ${pageName} </title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>`);}

function htmlE(res){
    res.write(`</body>
    </html>`);
    res.end();}

function idefk(res){
    for (let el of posts){
        
    }
}


app.post("/register",(req,res)=>{
    for(let i=0;i<peeble.length;i++){
        if(peeble[i].userName===req.body.userName||peeble[i].email===req.body.email){
        htmlS(res,'haiii');
        res.write(`<form method="post" action="/register">
        <div>
            <input placeholder="the name of your user" type="text" name="userName" id="uname">
        </div>
        <div>   
            <input placeholder="your name" type="text" name="firstName" id="fname">
        </div>
        <div>
            <input placeholder="your name but like the second part" type="text" name="lastName" id="lname">
        </div>
        <div>
            <input placeholder="electronic mailing adress" type="email" name="email" id="email">
        </div>
        <div>
            <input placeholder="word of passing" type="password" name="password" id="pword">
        </div>
        <p style="color:rgb(255, 0, 0);">Username or eMail already taken!</p>
        <div>
            <input type="submit" value="submit">
        </div>
    </form>
    <a href="login.html">akshully i have an account i just rembered</a>`)
        htmlE(res);
        return;
        }
    }
    peeble.push({userName:req.body.userName, firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email, password:req.body.password})
    let peebleString = JSON.stringify(peeble);
    fs.writeFileSync("peeble.json", peebleString);
    req.session.currentUser = {userName:req.body.userName, firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email, password:req.body.password};
    console.log("string and currentuser")
    console.log(req.session.currentUser);
    console.log(peeble);
    res.redirect('/posts');
})

app.post("/login",(req,res)=>{
    console.log(peeble);
    for (let i = 0; i < peeble.length; i++) {
        if(peeble[i].userName===req.body.userName){
            if(peeble[i].password===req.body.password){
                res.redirect('/posts');
                console.log("found somebody :3");
                req.session.currentUser = peeble[i];
                console.log(req.session.currentUser);
                console.log(req.session);
                return;
            } 
        };
    };
    htmlS(res, 'wb');
    res.write(`<form method="POST" action="/login">
    <div>
        <input placeholder="the name of your user" type="text" name="userName" id="uname">
    </div>
    <div>
        <input placeholder="word of passing" type="password" name="password" id="pword">
    </div>
    <p style="color:rgb(255, 0, 0);">Incorrect username/password.</p>
    <div>
        <input type="submit" value="submit">
    </div>
</form>
<a href="forgor.html">forgor your password?</a>
<a href="register.html">remembered your a dumbass with no account?</a>`)
    htmlE(res);
})

app.post("/post",(req,res)=>{
    console.log(req.session);
    posts.unshift({data:req.body.postData, creator:req.session.currentUser.userName, date:(new Date()).toLocaleDateString(), time:(new Date()).toLocaleTimeString()})
    console.log(posts);
    res.redirect("/posts")
})


app.get("/posts",(req,res)=>{
    htmlS(res,'shhhh');
    res.write(`<h1>hey.</h1>
    <p>suffer.</p>
    <form class="postForm" method="post" action="/post">
        <div>
            <input placeholder="whats goin on?" type="text" name="postData" id="pdata">
        </div>
        <div>
            <input type="submit" value="submit">
        </div>
    </form>`)
    for(let post of posts){
        res.write(`<h4>${post.creator}</h4>
                   <p>${post.data}</p>
                   <h6>${post.date} ${post.time}</h6>`)
    }
    res.write(`<a href="logout"><button>i want to leave</button></a>`)
    htmlE(res);
})

app.get("/logout",(req,res)=>{
    console.log("loggin da hek out!!!1!!1!111!1!");
    req.session.currentUser=undefined;
    res.redirect('/index.html');
})


app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})