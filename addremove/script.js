let frogList = ["red pumpkin toadlet","desert rain frog","wood frog","red eyed tree frog","eastern leopard frog","fire bellied toad","goliath frog","lehmanns frog","purple harliquin toad","grey tree frog","lake titicaca water frog","fowler's toad","moor frog","midwife toad","surinam horned frog","mexican burrowing toad","ornate horned frog","cane toad","pickeral frog","antoni's dart frog","dumpy tree frog","natterjack toad","amazon milk frog","castle rock night frog","common brown frog","pool frog","la loma robber frog"]
let chosenFrog= []

let froptionsEl = document.querySelector("#froptions");
let frosenEl = document.querySelector("#frosen");

for (let el of frogList){
    let listFrog = document.createElement("li");
    listFrog.textContent=el;
    froptionsEl.appendChild(listFrog);
}

for (let el of chosenFrog){
    let listFrog=document.createElement("li");
    listFrog.textContent=el;
    frosenEl.appendChild(listFrog);
}

let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

function toFroptions(index){
    
}

add.onClick = () => {console.log("should add")};
remove.onClick = () => {console.log("should remove")};