let frogList = ["red pumpkin toadlet","desert rain frog", "eastern leopard frog","fire bellied toad","purple harliquin toad","grey tree frog"]

let froptionsEl = document.querySelector("#froptions");

for (let el of frogList){
    let listFrog = document.createElement("li");
    listFrog.textContent=el;
    optionsEl.appendChild(listFrog);
}