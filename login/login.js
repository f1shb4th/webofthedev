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


let peeble=[]
let posts = []


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
        htmlS(res,'username/email already taken');
        res.write('<p>no</p>')
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
                req.session.currentUser = peeble[i];
                console.log(req.session.currentUser)
                return;
            } 
        };
    };
})

app.post("/post",(req,res)=>{
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
    req.session.currentUser=undefined;
    res.redirect('/index.html');
})


app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})