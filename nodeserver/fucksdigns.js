console.log("DIE DDIE DIE DIE DEATH DIE DIE DIE");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:false}))

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

function KILLEVERYONETILTHEYDIE(res, people){
    for(let x of people){
        res.write(`<p>fuck off ${x.lN} die die die die ${x.fN}</p>`)
    }
}

function htmlE(res){
    res.write(`</body>
    </html>`);
    res.end();}

let people = []

app.get('/',(req,res)=>{
people.push({fN:req.query.firstName, lN:req.query.lastName})
    console.log(req.query);
    htmlS(res);
    res.write(`
    <form method="GET" action="http://localhost:3000">
        <div>   
        <label for="fname">who tf r you???????????????????</label>
        <input type="text" name="firstName" id="fname">
        </div>
        <div>
        hi :3
        <input type="text" name="lastName" id="lname">
        <input type="submit" value="Go">
        </div>
    </form>
            `);
    KILLEVERYONETILTHEYDIE(res, people);
    htmlE(res);
})

app.listen(port,()=>{
    console.log(`piss your pants die die die die die on port${port}`)
})