const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.post("/register",(req,res)=>{
    console.log("new dude");
    res.redirect('/superSecretSite.html');
})
app.post("/login",(req,res)=>{
    console.log("old dude");
})

app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})