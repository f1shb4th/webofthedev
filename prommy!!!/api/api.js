const express = require('express');
const app = express();
const port = 6969;


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


/*
scientific suborder
common suborder
scientific family
common family
scientific genus
common genus
scientific name
common name(s)
locale
size
iucn redlist status
morphs ???
*/


app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})