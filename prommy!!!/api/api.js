const e = require('express');
const express = require('express');
const { restart } = require('nodemon');
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
    scientificname:"Ascaphus montanus", commonname:"Rocky mountain tailed frog",
    locale:"United States, Canada", size:"30-50mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Ascaphidae", commonfamily:"Tailed frogs",
    scientificgenus:"Ascaphus", commongenus:"Tailed frogs",
    scientificname:"Ascaphus truei", commonname:"Coastal tailed frog",
    locale:"United States, Canada", size:"30-50mm", iucn:"LC"
    },



    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Barbourula", commongenus:"Jungle toads",
    scientificname:"Barbourula busuangensis", commonname:"Busuanga Jungle Toad",
    locale:"Philippines", size:"88mm", iucn:"NT"
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
    scientificname:"Bombina fortinuptialis", commonname:"Large-spined bell toad",
    locale:"China", size:"", iucn:"VU"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina lichuanensis", commonname:"Lichuan bell toad",
    locale:"China", size:"", iucn:"VU"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina maxima", commonname:"Large-webbed bell toad",
    locale:"China", size:"44-51", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina microdeladigitora", commonname:"Small-webbed bell toad",
    locale:"China, Vietnam", size:"77mm", iucn:"CR"
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
    scientificname:"Bombina pachypus", commonname:"Apennine yellow-bellied toad",
    locale:"Italy", size:"35-55", iucn:"EN"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Bombinatoridae", commonfamily:"Fire-bellied toads",
    scientificgenus:"Bombina", commongenus:"Fire-bellied toads",
    scientificname:"Bombina variegata", commonname:"Yellow-bellied toad",
    locale:"Austria, Belgium, Bulgaria, Czech Republic, France, Germany, Greece, Hungary, Italy, Liechtenstein, Luxembourg, Macedonia, Moldova, Republic of, Montenegro, Netherlands, Poland, Romania, Serbia, Slovakia, Slovenia, Switzerland, Ukraine",
    size:"35-55", iucn:"LC"
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
    scientificname:"Leiopelma hamiltoni", commonname:"Hamilton's frog",
    locale:"New Zealand", size:"43-49mm", iucn:"VU"
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
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Alytes", commongenus:"Midwife toads",
    scientificname:"Alytes almogavarii", commonname:"Catalonian midwife toad",
    locale:"France, Spain", size:"", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Alytes", commongenus:"Midwife toads",
    scientificname:"Alytes cisternasii", commonname:"Iberian midwife toad",
    locale:"Portugal, Spain", size:"36-42mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Alytes", commongenus:"Midwife toads",
    scientificname:"Alytes dickhilleni", commonname:"Betic midwife toad",
    locale:"Spain", size:"35mm", iucn:"EN"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Alytes", commongenus:"Midwife toads",
    scientificname:"Alytes maurus", commonname:"Moroccan midwife toad",
    locale:"Morocco", size:"34.1-47.4mm", iucn:"NT"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Alytes", commongenus:"Midwife toads",
    scientificname:"Alytes muletensis", commonname:"Mallorcan midwife toad",
    locale:"Spain", size:"30-38mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Alytes", commongenus:"Midwife toads",
    scientificname:"Alytes obstetricans", commonname:"Common midwife toad",
    locale:"Belgium, France, Germany, Italy, Luxembourg, Netherlands, Portugal, Spain, Switzerland",
    size:"55mm", iucn:"LC"
    },

    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Discoglossinae", commongenus:"Painted frogs",
    scientificname:"Discoglossus galganoi", commonname:"Iberian painted frog",
    locale:"Portugal, Spain", size:"45-65mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Discoglossinae", commongenus:"Painted frogs",
    scientificname:"Discoglossus montalentii", commonname:"Corsican painted frog",
    locale:"France (Meditteranean)", size:"65mm", iucn:"NT"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Discoglossinae", commongenus:"Painted frogs",
    scientificname:"Discoglossus pictus", commonname:"Mediterranean painted frog",
    locale:"France, Spain", size:"70mm", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Discoglossinae", commongenus:"Painted frogs",
    scientificname:"Discoglossus sardus", commonname:"Tyrrhenian painted frog",
    locale:"France, Italy", size:"", iucn:"LC"
    },
    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Discoglossinae", commongenus:"Painted frogs",
    scientificname:"Discoglossus scovazzi", commonname:"Moroccan painted frog",
    locale:"Morocco", size:"50mm", iucn:"LC"
    },

    {scientificsuborder:"Archaeobatrachia", commonsuborder:"Primitive frogs",
    scientificfamily:"Alytidae", commonfamily:"Midwife toads",
    scientificgenus:"Latonia", commongenus:"Painted frogs",
    scientificname:"Latona nigrivevnter", commonname:"Hula painted frog",
    locale:"Israel", size:"119mm-127mm", iucn:"CR"
    },





    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"Leptobrachella", commongenus:"Dwarf litter frogs",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"Leptobrachium", commongenus:"Eastern spadefoot toads",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"Leptolalax", commongenus:"Asian toads",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"Oreolalax", commongenus:"Lazy toads",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"Scutiger", commongenus:"Cat-eyed toads",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"Atympanophrys", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },

    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Megophyridae", commonfamily:"Leaf litter frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },



    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Pelobatidae", commonfamily:"European spadefoot toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },



    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Pelodytidae", commonfamily:"Parsley frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },



    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Pipidae", commonfamily:"Tongueless frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },



    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Rhinophrynidae", commonfamily:"Mexican burrowing frogs",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"Mexican burrowing frog",
    locale:"", size:"", iucn:""
    },



    {scientificsuborder:"Mesobatrachia", commonsuborder:"Middle frogs",
    scientificfamily:"Scaphiopodidae", commonfamily:"American spadefoot toads",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
]


/*
    {scientificsuborder:"", commonsuborder:"",
    scientificfamily:"", commonfamily:"",
    scientificgenus:"", commongenus:"",
    scientificname:"", commonname:"",
    locale:"", size:"", iucn:""
    },
*/

app.get('/frogs', (req, res)=>{
    res.json(frogs)
});

app.get('/suborders', (req,res)=>{
    const suborders = new Set();
    for(let frog of frogs){
        console.log(frog);
        suborders.add(frog.scientificsuborder);
    }
    console.log(suborders);
    res.json([...suborders]);
});

app.get('/:suborder', (req, res)=>{
    const families = new Set();
    for(let frog of frogs){
        if(frog.scientificsuborder===req.params.suborder){
            families.add(frog.scientificfamily);
        }
        else if(frog.commonsuborder===req.params.suborder){
            res.redirect(`/${frog.scientificsuborder}`)
        }
    }
    res.json([...families]);
});

app.get('/:suborder/:family', (req, res)=>{
    const genus = new Set();
    for(let frog of frogs){
        if(frog.scientificsuborder===req.params.suborder){
            if(frog.scientificfamily===req.params.family){
                genus.add(frog.scientificgenus);
            }
            else if(frog.commonfamily===req.params.family){
                res.redirect(`/${req.params.suborder}/${frog.scientificfamily}`)
            }
        }
        else if(frog.commonsuborder===req.params.suborder){
            if(frog.scientificfamily===req.params.family){
                res.redirect(`/${frog.scientificsuborder}/${req.params.family}`)
            }
            else if(frog.commonfamily===req.params.family){
                res.redirect(`/${frog.scientificsuborder}/${frog.scientificfamily}`)
            }
        }
    }
    res.json([...genus]);
});

app.get('/:suborder/:family/:genus', (req, res)=>{
    const species = new Set();
    for(let frog of frogs){
        if(frog.scientificsuborder===req.params.suborder){
            if(frog.scientificfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    species.add(frog.scientificname);
                }
                else if(frog.commongenus===req.params.genus){
                    res.redirect(`/${req.params.suborder}/${req.params.family}/${frog.scientificgenus}`)
                }
            }
            else if(frog.commonfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    res.redirect(`/${req.params.suborder}/${frog.scientificfamily}/${req.params.genus}`)
                }
                else if(frog.commongenus===req.params.genus){
                    res.redirect(`/${req.params.suborder}/${frog.scientificfamily}/${frog.scientificgenus}`)
                }
            }
        }
        else if(frog.commonsuborder===req.params.suborder){
            if(frog.scientificfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    res.redirect(`/${frog.scientificsuborder}/${req.params.family}/${req.params.genus}`)
                }
                else if(frog.commongenus===req.params.genus){
                    res.redirect(`/${frog.scientificsuborder}/${req.params.family}/${frog.scientificgenus}`)
                }
            }
            else if(frog.commonfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    res.redirect(`/${frog.scientificsuborder}/${frog.scientificfamily}/${req.params.genus}`)
                }
                else if(frog.commongenus===req.params.genus){
                    res.redirect(`/${frog.scientificsuborder}/${frog.scientificfamily}/${frog.scientificgenus}`)
                }
            }
        }
    }
    res.json([...species]);
});

app.get('/:suborder/:family/:genus/:species', (req, res)=>{
    const frogInfo = new Set();
    for(let frog of frogs){
        if(frog.scientificsuborder===req.params.suborder){
            if(frog.scientificfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        frogInfo.add(frog);
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${req.params.suborder}/${req.params.family}/${req.params.genus}/${frog.scientificname}`)
                    }
                }
                else if(frog.commongenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        res.redirect(`/${req.params.suborder}/${req.params.family}/${frog.scientificgenus}/${req.params.species}`)
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${req.params.suborder}/${req.params.family}/${frog.scientificgenus}/${frog.scientificname}`)
                    }
                }
            }
            else if(frog.commonfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        res.redirect(`/${req.params.suborder}/${frog.scientificfamily}/${req.params.genus}/${req.params.species}`)
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${req.params.suborder}/${frog.scientificfamily}/${req.params.genus}/${frog.scientificname}`)
                    }
                }
            }  
                else if(frog.commongenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        res.redirect(`/${req.params.suborder}/${frog.scientificfamily}/${frog.scientificgenus}/${req.params.species}`)
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${req.params.suborder}/${frog.scientificfamily}/${frog.scientificgenus}/${frog.scientificname}`)
                    }
                }
            }
        else if(frog.commonsuborder===req.params.suborder){
            if(frog.scientificfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${req.params.family}/${req.params.genus}/${req.params.species}`)
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${req.params.family}/${req.params.genus}/${frog.scientificname}`)
                    }
                }
                else if(frog.commongenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${req.params.family}/${frog.scientificgenus}/${req.params.species}`)
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${req.params.family}/${frog.scientificgenus}/${frog.scientificname}`)
                    }
                }
            }
            else if(frog.commonfamily===req.params.family){
                if(frog.scientificgenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${frog.scientificfamily}/${req.params.genus}/${req.params.species}`)
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${frog.scientificfamily}/${req.params.genus}/${frog.scientificname}`)
                    }
                }
                else if(frog.commongenus===req.params.genus){
                    if(frog.scientificname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${frog.scientificfamily}/${frog.scientificgenus}/${req.params.species}`)
                    }
                    else if(frog.commonname===req.params.species){
                        res.redirect(`/${frog.scientificsuborder}/${frog.scientificfamily}/${frog.scientificgenus}/${frog.scientificname}`)
                    }
                }
            }
        }
    }
    res.json([...frogInfo]);
});


app.listen(port,()=>{
    console.log(`piss your pants and die on port${port}`)
})