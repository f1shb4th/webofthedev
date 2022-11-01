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

let frogs = [
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Ascaphidae", commonfamily:"Tailed frogs",
    scientificgenus:"Ascaphus", commongenus:"Tailed frogs",
    scientificname:"Ascaphus truei", commonname:"Coastal tailed frog",
    locale:"United States, Canada", size:"30-50mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Ascaphidae", commonfamily:"Tailed frogs",
    scientificgenus:"Ascaphus", commongenus:"Tailed frogs",
    scientificname:"Ascaphus montanus", commonname:"Rocky mountain tailed frog",
    locale:"United States, Canada", size:"30-50mm", iucn:"LC"
    },



    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Barbourula", commongenus:"Jungle toads",
    scientificname:"Barbourula kalimantanensis", commonname:"Kalimantan Jungle Toad",
    locale:"Indonesia", size:"77mm", iucn:"EN"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina bombina", commonname:"European fire-bellied toad",
    locale:"Austria, Belarus, Bosnia and Herzegovina, Bulgaria, Croatia, Czech Republic, Denmark, Germany, Greece, Hungary, Kazakhstan, Latvia, Lithuania, Moldova, Poland, Romania, Russia, Serbia, Slovakia, Slovenia, Sweden, Turkey, Ukraine", 
    size:"60mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina orientalis", commonname:"Orental fire-bellied toad",
    locale:"South Korea, North Korea, Japan, China, Russia", size:"40-50mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina variegata", commonname:"Yellow-bellied toad",
    locale:"Austria, Belgium, Bulgaria, Czech Republic, France, Germany, Greece, Hungary, Italy, Liechtenstein, Luxembourg, Macedonia, Moldova, Republic of, Montenegro, Netherlands, Poland, Romania, Serbia, Slovakia, Slovenia, Switzerland, Ukraine",
    size:"35-55", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina pachypus", commonname:"Apennine yellow-bellied toad",
    locale:"Italy", size:"35-55", iucn:"EN"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina maxima", commonname:"Large-webbed bell toad",
    locale:"China", size:"44-51", iucn:"LC"
    },



    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Leiopelmatidae", commonfamily:"New Zealand frogs",
    scientificgenus:"Leiopelma", commongenus:"New Zealand primitive frogs",
    scientificname:"Leiopelma archeyi", commonname:"Archey's frog",
    locale:"New Zealand", size:"31-37mm", iucn:"CR"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Leiopelmatidae", commonfamily:"New Zealand frogs",
    scientificgenus:"Leiopelma", commongenus:"New Zealand primitive frogs",
    scientificname:"Leiopelma hochstetteri", commonname:"Hochstetter’s frog",
    locale:"New Zealand", size:"38-47mm", iucn:"VU"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Leiopelmatidae", commonfamily:"New Zealand frogs",
    scientificgenus:"Leiopelma", commongenus:"New Zealand primitive frogs",
    scientificname:"Leiopelma pakeka", commonname:"Maud Island frog",
    locale:"New Zealand", size:"45mm", iucn:"VU"
    },


    
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae ", commonfamily:"Painted frogs, midwife toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae ", commonfamily:"Painted frogs, midwife toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae ", commonfamily:"Painted frogs, midwife toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae ", commonfamily:"Painted frogs, midwife toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae ", commonfamily:"Painted frogs, midwife toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae ", commonfamily:"Painted frogs, midwife toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae ", commonfamily:"Painted frogs, midwife toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
]

app.get('/frogs', (req, res)=>{
    res.json(frogs)
});
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