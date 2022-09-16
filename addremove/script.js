let frogList = ["red pumpkin toadlet","desert rain frog","wood frog","red eyed tree frog","eastern leopard frog","fire bellied toad","goliath frog","lehmanns frog","purple harliquin toad","grey tree frog","lake titicaca water frog","fowler's toad","moor frog","midwife toad","surinam horned frog","mexican burrowing toad","ornate horned frog","cane toad","pickeral frog","antoni's dart frog","dumpy tree frog","natterjack toad","amazon milk frog","castle rock night frog","common brown frog","pool frog","la loma robber frog"]
let chosenFrog= []

let froptionsEl = document.querySelector("#froptions");
let frosenEl = document.querySelector("#frosen");

for (let el of frogList){
    let listFrog = document.createElement("li");
    listFrog.textContent=el;
    froptionsEl.appendChild(listFrog);
}

function addFrosen(el){
    let listFrog=document.createElement("li");
    listFrog.textContent=el;
    frosenEl.appendChild(listFrog);
}

for (let el of chosenFrog){
    addFrosen(el);
}

let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

function toFroptions(index){
    addFrosen(index);
    chosenFrog.push(frogList[index]);
    frogList.splice(index,1);
}

function toFrosen(index){
  addFrosen(index);
  frogList.push(chosenFrog[index]);
  chosenFrog.splice(index,1);
}

let isSelected = [];

for (let el of document.querySelectorAll("#froptions li")) {
  isSelected.push(false);
  el.onclick = () => {
    let allFrogs = Array.from(document.querySelectorAll("#froptions li"));
    let index = allFrogs.indexOf(el);
    isSelected[index] = !isSelected[index];
    if (isSelected[index]) {
      el.style.backgroundColor = "red";
    }
    else {
      el.style.backgroundColor = "";
    }
  };
}

let toUnselect = [];

for (let el of document.querySelectorAll("#frosen li")) {
  toUnselect.push(false);
    el.onclick = () => {
      console.log("fjrdufij")
      let chosenFrogs = Array.from(document.querySelectorAll("#frosen li"));
      let index = chosenFrogs.indexOf(el);
      toUnselect[index] = !toUnselect[index];
      if (toUnselect[index]) {
        el.style.backgroundColor = "red";
      }
      else {
        el.style.backgroundColor = "";
      }
    };
  }

add.onclick = () => {
    let idx=0;
    for(let el of isSelected){
        if(el==true){
            funny=frogList[idx];
            toFroptions(funny);
            idx--
        }
        idx++
    }
};

remove.onclick = () => {
    let idx=0;
    for(let el of toUnselect){
        if(el==true){
            silly=chosenFrog[idx];
            toFrosen(silly);
            idx--
        }
        idx++
    }
};