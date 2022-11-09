const e = require('express');
const express = require('express');
const { restart } = require('nodemon');
const app = express();
const port = 6969;

app.use(express.static('public'))

let deck = [];

let game = {
    playerHand:[],
    dealerHand:[]
}

function restartGame(){
    console.log('look at me building and shuffling and dealing YAAAAA')
}

retartGame();

app.post('/hit',(req,res)=>{
    res.json('hit');
})

app.post('/stand',(req,res)=>{
    res.json('stand');
})

app.post('/restart',(req,res)=>{
    restartGame();
    res.json('restart');
})

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

    
app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})