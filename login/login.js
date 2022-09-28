console.log("DIE DDIE DIE DIE DEATH DIE DIE DIE");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})
