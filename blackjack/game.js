const e = require('express');
const express = require('express');
const { restart } = require('nodemon');
const app = express();
const port = 6969;

app.use(express.static('public'))

let deck = [
    {colour:"black", suit:"club", value:"ace"},
    {colour:"black", suit:"club", value:"2"},
    {colour:"black", suit:"club", value:"3"},
    {colour:"black", suit:"club", value:"4"},
    {colour:"black", suit:"club", value:"5"},
    {colour:"black", suit:"club", value:"6"},
    {colour:"black", suit:"club", value:"7"},
    {colour:"black", suit:"club", value:"8"},
    {colour:"black", suit:"club", value:"9"},
    {colour:"black", suit:"club", value:"10"},
    {colour:"black", suit:"club", value:"jack"},
    {colour:"black", suit:"club", value:"queen"},
    {colour:"black", suit:"club", value:"king"},

    {colour:"black", suit:"spade", value:"ace"},
    {colour:"black", suit:"spade", value:"2"},
    {colour:"black", suit:"spade", value:"3"},
    {colour:"black", suit:"spade", value:"4"},
    {colour:"black", suit:"spade", value:"5"},
    {colour:"black", suit:"spade", value:"6"},
    {colour:"black", suit:"spade", value:"7"},
    {colour:"black", suit:"spade", value:"8"},
    {colour:"black", suit:"spade", value:"9"},
    {colour:"black", suit:"spade", value:"10"},
    {colour:"black", suit:"spade", value:"jack"},
    {colour:"black", suit:"spade", value:"queen"},
    {colour:"black", suit:"spade", value:"king"},

    {colour:"red", suit:"heart", value:"ace"},
    {colour:"red", suit:"heart", value:"2"},
    {colour:"red", suit:"heart", value:"3"},
    {colour:"red", suit:"heart", value:"4"},
    {colour:"red", suit:"heart", value:"5"},
    {colour:"red", suit:"heart", value:"6"},
    {colour:"red", suit:"heart", value:"7"},
    {colour:"red", suit:"heart", value:"8"},
    {colour:"red", suit:"heart", value:"9"},
    {colour:"red", suit:"heart", value:"10"},
    {colour:"red", suit:"heart", value:"jack"},
    {colour:"red", suit:"heart", value:"queen"},
    {colour:"red", suit:"heart", value:"king"},

    {colour:"red", suit:"diamond", value:"ace"},
    {colour:"red", suit:"diamond", value:"2"},
    {colour:"red", suit:"diamond", value:"3"},
    {colour:"red", suit:"diamond", value:"4"},
    {colour:"red", suit:"diamond", value:"5"},
    {colour:"red", suit:"diamond", value:"6"},
    {colour:"red", suit:"diamond", value:"7"},
    {colour:"red", suit:"diamond", value:"8"},
    {colour:"red", suit:"diamond", value:"9"},
    {colour:"red", suit:"diamond", value:"10"},
    {colour:"red", suit:"diamond", value:"jack"},
    {colour:"red", suit:"diamond", value:"queen"},
    {colour:"red", suit:"diamond", value:"king"},
];

let game = {
    playerHand:[],
    dealerHand:[]
}

// function buildDeck(){
//     deck - [];
//     // add all cards
// }

function shuffleDeck(){
    let shuffledDeck=[];
    for(let card of deck){
        cNum = Math.floor(Math.random() * deck.length());
        shuffledDeck.push(deck[cNum]);
        deck.splice(cNum, 1);
    };
    return shuffledDeck;
}

function dealCard(deck,hand){
    hand.push(deck[0]);
    deck.shift();
    return hand;
}

function restartGame(){
    buildDeck();
    shuffleDeck();
    game = {
        playerHand:[],
        dealerHand:[]
    }
    dealCard(deck,game.playerHand);
    dealCard(deck,game.playerHand);
    dealCard(deck,game.dealerHand);
    dealCard(deck,game.dealerHand);
    console.log('look at me building and shuffling and dealing YAAAAA')
}

restartGame();

app.post('/hit',hand,(req,res)=>{
    dealCard(deck,hand);
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