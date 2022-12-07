function playerhandbuilder(game){
    let playerBuilt=[];
    let hand = document.querySelector('#playerHand')

    for(let c of game.playerHand){
        let card=document.createElement('pre')
        card.textContent=buildCard(c.suit,c.value)
        playerBuilt.push(card)
    }

    hand.replaceChildren(...playerBuilt)
};

function dealerhandbuilder(game,isStand){
    let dealerBuilt=[];
    let hand = document.querySelector('#dealerHand')

    for(let c of game.dealerHand){
        let card=document.createElement('pre')
        if(isStand === true){
            card.textContent=buildCard(c.suit,c.value)
            dealerBuilt.push(card)
        }else{
            if(c === game.dealerHand[0]){
                card.textContent = buildCard('spade','empty');
                dealerBuilt.push(card)
            }else{
                card.textContent=buildCard(c.suit,c.value)
                dealerBuilt.push(card)
            }
        }
    }

    hand.replaceChildren(...dealerBuilt)
};

function gameMsg(game){
    let text = document.querySelector('#textbox')
    let msg = document.createElement('pre')
    msg.textContent=game.gMsg;
    text.replaceChildren(msg)
}

async function hit() {
    let game = await fetch('http://localhost:6969/hit', { method: 'POST' }).then(fRes => {
        return fRes.json();
    });
    console.log(game)
    playerhandbuilder(game);
    dealerhandbuilder(game,false);
    if(game.playerBust === true){
        gameMsg(game)
    }
};

async function stand() {
    let game = await fetch('http://localhost:6969/stand', { method: 'POST' }).then(fRes => {
        return fRes.json();
    });
    console.log(game)
    playerhandbuilder(game)
    dealerhandbuilder(game,true);
    gameMsg(game)
};

async function restart() {
    let game = await fetch('http://localhost:6969/restart', { method: 'POST' }).then(fRes => {
        return fRes.json();
    });
    console.log(game)
    playerhandbuilder(game)
    dealerhandbuilder(game,false);
};

restart()

function buildCard(suit, rank)
{
    let top = "____________";
    let zero = "|           |";
    let bottom = "|___________|";
    let cardLayouts = [
        { empty: "|           |", oneL: "| ♠         |", oneM: "|     ♠     |", oneR: "|         ♠ |", two: "| ♠       ♠ |", three: "| ♠   ♠   ♠ |" },
        { empty: "|           |", oneL: "| ♥         |", oneM: "|     ♥     |", oneR: "|         ♥ |", two: "| ♥       ♥ |", three: "| ♥   ♥   ♥ |" },
        { empty: "|           |", oneL: "| ♦         |", oneM: "|     ♦     |", oneR: "|         ♦ |", two: "| ♦       ♦ |", three: "| ♦   ♦   ♦ |" },
        {empty: "|           |", oneL: "| ♣         |", oneM: "|     ♣     |", oneR: "|         ♣ |", two: "| ♣       ♣ |", three: "| ♣   ♣   ♣ |" }
    ];

    let faces = {
        aT: "| A         |", aB: "|         A |",
        qT: "| Q         |", qB: "|         Q |",
        kT: "| K         |", kB: "|         K |",
        jT: "| J         |", jB: "|        J  |"
        };;

    let suitRows;
    
    if (suit === 'spade') {
        suitRows = cardLayouts[0];
    }
    else if (suit === 'heart') {
        suitRows = cardLayouts[1];
    }
    else if (suit === 'diamond') {
        suitRows = cardLayouts[2];
    }
    else if (suit === 'club') {
        suitRows = cardLayouts[3];
    }

    let card;

    switch(rank){
        case 'ace' : 
        card = [top, zero, faces.aT, zero, suitRows.oneM, zero, faces.aB, bottom].join('\n');
        break;
        case 2 : 
        card = [top, zero, suitRows.oneL, zero, zero, zero, suitRows.oneR, bottom].join('\n');
        break;
        case 3 : 
        card = [top, zero, suitRows.oneL, zero, suitRows.oneM, zero, suitRows.oneR, bottom].join('\n');
        break;
        case 4 : 
        card = [top, zero, suitRows.two, zero, zero, zero, suitRows.two, bottom].join('\n');
        break;
        case 5 : 
        card = [top, zero, suitRows.two, zero, suitRows.oneM, zero, suitRows.two, bottom].join('\n');
        break;
        case 6 : 
        card = [top, zero, suitRows.two, zero, suitRows.two, zero, suitRows.two, bottom].join('\n');
        break;
        case 7 : 
        card = [top, zero, suitRows.two, suitRows.oneM, suitRows.two, zero, suitRows.two, bottom].join('\n');
        break;
        case 8 : 
        card = [top, zero, suitRows.two, suitRows.oneM, suitRows.two, suitRows.oneM, suitRows.two, bottom].join('\n');
        break;
        case 9 : 
        card = [top, zero, suitRows.three, zero, suitRows.three, zero, suitRows.three, bottom].join('\n');
        break;
        case 10 : 
        card = [top, zero, suitRows.two, suitRows.three, zero, suitRows.three, suitRows.two, bottom].join('\n');
        break;
        case 'jack' : 
        card = card = [top, zero, faces.jT, zero, suitRows.oneM, zero, faces.jB, bottom].join('\n');
        break;
        case 'queen' : 
        card = card = [top, zero, faces.qT, zero, suitRows.oneM, zero, faces.qB, bottom].join('\n');
        break;
        case 'king' : 
        card = card = [top, zero, faces.kT, zero, suitRows.oneM, zero, faces.kB, bottom].join('\n');
        break;
        case 'empty' : 
        card = [top, zero, zero, zero, zero, zero, zero, bottom].join('\n')
        break;
    } 

    return(card);
}