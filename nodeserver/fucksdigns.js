console.log("DIE DDIE DIE DIE DEATH DIE DIE DIE");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    console.log(req.query);
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form method="GET" action="http://localhost:3000">
                <input type="text" name="firstName" id="fname">
                <input type="submit" value="Go">
            </form>
            <p>fuck off ${req.query.lastName} die die die die ${req.query.firstName}</p>
        </body>
        </html>`);
})
app.listen(port,()=>{
    console.log(`piss your pants die ddie die die die on port${port}`)
})