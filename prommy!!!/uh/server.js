const express = require('express');
const app = express();
const port = 0420;


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


// app.get('/',(req,res)=>{
//     htmlS(res, 'idk');
//     res.write(`<h1> cool page </h1>`)
//     fetch('https://rickandmortyapi.com/api/character').then(fRes=>{
//         console.log(fRes);
//         return fRes.json();
//     }).then(data=>{
//         for(let person of data.results){
//             res.write(`<h1>${person.name}</h1>`)
//             for (let GDHUSJB of person.episode){
//                 fetch(GDHUSJB).then(r=>{
//                     return r.json();
//                 }).then(episode=>{
//                     res.write(`<p>${episode.name}</p>`)
//                 })
//             }
//         }
//         console.log(data);
//     })
// })
app.get('/',async(req,res)=>{
    htmlS(res, 'idk');
    res.write(`<h1> cool page </h1>`)
    let data = await fetch('https://rickandmortyapi.com/api/character').then(fRes=>{
        console.log(fRes);
        return fRes.json();
    });
    
        for(let person of data.results){
            res.write(`<h1>${person.name}</h1>`)
            for (let GDHUSJB of person.episode){
                let episode = await fetch(GDHUSJB).then(r=>{
                    return r.json();
                })

                    res.write(`<p>${episode.name}</p>`)
            }
        }
        console.log(data);
})

app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})