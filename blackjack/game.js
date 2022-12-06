const e = require('express');
const express = require('express');
const { restart } = require('nodemon');
const app = express();
const port = 6969;

app.use(express.static('public'))

let shuffledDeck = [];

let game = {
    playerHand:[],
    dealerHand:[],
    playerBust:false,
    dealerBust:false,
    pHandVal:0,
    dHandVal:0,
    gMsg:""
};

// function buildDeck(){
//     deck - [];
//     // add all cards
// }

function gameMessage(game){
    if(game.playerBust===false){
        if(game.dealerBust===false){
            gMsg="Uhm... no one busts..?";
        }else{
            gMsg="Dealer busts!";
        };
    }else{
        gMsg="Player busts!";
    };
    return gMsg;
};

function shuffleDeck(){
    let deck = [
        {colour:"black", suit:"club", value:"ace",printval:[0,0,2,0,1]},
        {colour:"black", suit:"club", value:2,printval:[1,0,0,0,3]},
        {colour:"black", suit:"club", value:3,printval:[1,0,2,0,3]},
        {colour:"black", suit:"club", value:4,printval:[4,0,0,0,4]},
        {colour:"black", suit:"club", value:5,printval:[4,0,2,0,4]},
        {colour:"black", suit:"club", value:6,printval:[4,0,4,0,4]},
        {colour:"black", suit:"club", value:7,printval:[4,2,4,0,4]},
        {colour:"black", suit:"club", value:8,printval:[4,2,4,2,4]},
        {colour:"black", suit:"club", value:9,printval:[5,0,5,0,5]},
        {colour:"black", suit:"club", value:10,printval:[4,5,0,5,4]},
        {colour:"black", suit:"club", value:"jack",printval:[2,0,2,0,3]},
        {colour:"black", suit:"club", value:"queen",printval:[4,0,2,0,5]},
        {colour:"black", suit:"club", value:"king",printval:[6,0,2,0,7]},
    
        {colour:"black", suit:"spade", value:"ace",printval:[0,0,2,0,1]},
        {colour:"black", suit:"spade", value:2,printval:[1,0,0,0,3]},
        {colour:"black", suit:"spade", value:3,printval:[1,0,2,0,3]},
        {colour:"black", suit:"spade", value:4,printval:[4,0,0,0,4]},
        {colour:"black", suit:"spade", value:5,printval:[4,0,2,0,4]},
        {colour:"black", suit:"spade", value:6,printval:[4,0,4,0,4]},
        {colour:"black", suit:"spade", value:7,printval:[4,2,4,0,4]},
        {colour:"black", suit:"spade", value:8,printval:[4,2,4,2,4]},
        {colour:"black", suit:"spade", value:9,printval:[5,0,5,0,5]},
        {colour:"black", suit:"spade", value:10,printval:[4,5,0,5,4]},
        {colour:"black", suit:"spade", value:"jack",printval:[2,0,2,0,3]},
        {colour:"black", suit:"spade", value:"queen",printval:[4,0,2,0,5]},
        {colour:"black", suit:"spade", value:"king",printval:[6,0,2,0,7]},
    
        {colour:"red", suit:"heart", value:"ace",printval:[0,0,2,0,1]},
        {colour:"red", suit:"heart", value:2,printval:[1,0,0,0,3]},
        {colour:"red", suit:"heart", value:3,printval:[1,0,2,0,3]},
        {colour:"red", suit:"heart", value:4,printval:[4,0,0,0,4]},
        {colour:"red", suit:"heart", value:5,printval:[4,0,2,0,4]},
        {colour:"red", suit:"heart", value:6,printval:[4,0,4,0,4]},
        {colour:"red", suit:"heart", value:7,printval:[4,2,4,0,4]},
        {colour:"red", suit:"heart", value:8,printval:[4,2,4,2,4]},
        {colour:"red", suit:"heart", value:9,printval:[5,0,5,0,5]},
        {colour:"red", suit:"heart", value:10,printval:[4,5,0,5,4]},
        {colour:"red", suit:"heart", value:"jack",printval:[2,0,2,0,3]},
        {colour:"red", suit:"heart", value:"queen",printval:[4,0,2,0,5]},
        {colour:"red", suit:"heart", value:"king",printval:[6,0,2,0,7]},
    
        {colour:"red", suit:"diamond", value:"ace",printval:[0,0,2,0,1]},
        {colour:"red", suit:"diamond", value:2,printval:[1,0,0,0,3]},
        {colour:"red", suit:"diamond", value:3,printval:[1,0,2,0,3]},
        {colour:"red", suit:"diamond", value:4,printval:[4,0,0,0,4]},
        {colour:"red", suit:"diamond", value:5,printval:[4,0,2,0,4]},
        {colour:"red", suit:"diamond", value:6,printval:[4,0,4,0,4]},
        {colour:"red", suit:"diamond", value:7,printval:[4,2,4,0,4]},
        {colour:"red", suit:"diamond", value:8,printval:[4,2,4,2,4]},
        {colour:"red", suit:"diamond", value:9,printval:[5,0,5,0,5]},
        {colour:"red", suit:"diamond", value:10,printval:[4,5,0,5,4]},
        {colour:"red", suit:"diamond", value:"jack",printval:[2,0,2,0,3]},
        {colour:"red", suit:"diamond", value:"queen",printval:[4,0,2,0,5]},
        {colour:"red", suit:"diamond", value:"king",printval:[6,0,2,0,7]},
    ];
    let shuffledDeck = [];
    for(let card of deck){
        cNum = Math.floor(Math.random() * deck.length);
        shuffledDeck.push(deck[cNum]);
        deck.splice(cNum, 1);
    };
    return shuffledDeck;
};

function dealCard(deck,hand){
    hand.push(deck[0]);
    deck.shift();
    return hand;
};

function handVal(hand){
    let val=0;
    let aceCount=[];
    for(let card of hand){
        if(card.value==="king"||card.value==="queen"||card.value==="jack"){
            val+=10;
        } else if(card.value==="ace"){
            aceCount=aceCount+"1";
        } else{
            val+=card.value;
        };
    };
    for(val in aceCount){
        if(val<=10){
            val+=11;
        } else{
            val+=1;
        };
    };
    return val;
};

function restartGame(){
    shuffledDeck = shuffleDeck();
    game = {
        playerHand:[],
        dealerHand:[],
        playerBust:false,
        dealerBust:false,
        pHandVal:0,
        dHandVal:0,
        gMsg:""
    }
    dealCard(shuffledDeck,game.playerHand);
    dealCard(shuffledDeck,game.playerHand);
    dealCard(shuffledDeck,game.dealerHand);
    dealCard(shuffledDeck,game.dealerHand);
    console.log('look at me building and shuffling and dealing YAAAAA')
};

restartGame();

app.post('/hit',(req,res)=>{
    dealCard(shuffledDeck,game.playerHand);
    console.log(game.playerHand)
    game.pHandVal = handVal(game.playerHand);
    if(game.pHandVal>21){
        game.playerBust=true;
    };
    game.gMsg=gameMessage(game);
    res.json(game);
});

app.post('/stand',(req,res)=>{
    game.dHandVal=handVal(game.dealerHand);
    while(game.dHandVal<17){
        dealCard(shuffledDeck,game.dealerHand);
        game.dHandVal=handVal(game.dealerHand);
    };
    if(game.dHandVal>21){
        game.dealerBust=true;
    }
    game.pHandVal = handVal(game.playerHand);
    game.gMsg=gameMessage(game);
    res.json(game);
});

app.post('/restart',(req,res)=>{
    restartGame();
    game.gMsg=gameMessage(game);
    res.json(game);
    console.log(game)
});

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
    <body>`);};

function htmlE(res){
    res.write(`</body>
    </html>`);
    res.end();};
    
app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
});