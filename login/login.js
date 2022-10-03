const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

let peeble=[]

app.post("/register",(req,res)=>{
    console.log(req.body);
    peeble.push({userName:req.body.userName, firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email, password:req.body.password})
    console.log(peeble);
    console.log("new dude");
    res.redirect('/superSecretSite.html');
})

app.post("/login",(req,res)=>{
    for (let i = 0; i < peeble.length; i++) {
        if(peeble[i].userName===req.body.userName){
            if(peeble[i].password===req.body.password){
                res.redirect('/superSecretSite.html');
            };
        };
      }
    console.log("old dude");
})



app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})