const cards_player = document.getElementById('cards_player');
const cards_pc = document.getElementById('cards_pc');

const btn_new_game = document.getElementById("btn_new_game");
const btn_new_card = document.getElementById("btn_new_card");
const btn_stop = document.getElementById("btn_stop");

const pc_score = document.getElementById("pc_score");
const player_score = document.getElementById("player_score");

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosTotales_jugador = 0;
let puntosTotales_pc = 0;

const createDeck = () => {
    /*
        for (let i = 2; i <= 10; i++) {
            deck.push(i + 'C');
        }
        for (let i = 2; i <= 10; i++) {
            deck.push(i + 'H')
        }
    */
    for (let i = 2; i <= 10; i++) {//itera 10 veces
        for (let tipo of tipos)//para cada elemento de tipos
            deck.push(i + tipo);//2+C, 2+D, 2+H...
    }
    for (let tipo of tipos)
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    console.log(deck);
    deck = _.shuffle(deck); //abaraja el arreglo
    //return deck;
}

btn_new_game.addEventListener('click', () => {
    puntosTotales_jugador = 0;
    player_score.innerHTML = 0;
    cards_player.innerHTML = '';

    puntosTotales_pc = 0;
    pc_score.innerHTML = 0;
    cards_pc.innerHTML = '';

    btn_new_card.disabled = false;
    btn_stop.disabled = false;
    createDeck();
});

btn_stop.addEventListener('click', () => {
    turnoComputadora(puntosTotales_jugador);
    console.log(puntosTotales_jugador);
    desabilitarBotones();
});

const pedirCarta = () => {
    if (deck.length === 0) {
        throw "No hay cartas en el deck";
    }
    carta = deck.pop();

    console.log(carta);
    return carta;
};

//Evento
btn_new_card.addEventListener('click', () => {
    // se crea la carta y se pone el puntaje
    const carta = pedirCarta();
    puntosTotales_jugador += valorCarta(carta);
    // se agrega en el html y se muestra el puntaje
    const imgCarta = document.createElement('img')
    imgCarta.src = `./assets/cards/${carta}.png`;
    imgCarta.classList = 'cards';
    cards_player.appendChild(imgCarta);
    player_score.innerHTML = puntosTotales_jugador;

    // si el puntaje supera los 21
    if (puntosTotales_jugador > 21) {
        let mensaje = 'Computadora gana';
        turnoComputadora(puntosTotales_jugador)
        alert(mensaje);
        desabilitarBotones();
    } else if (puntosTotales_jugador === 21) {
        let mensaje = 'Jugador gana';
        alert(mensaje);
        player_score.innerHTML = puntosTotales_jugador;
        turnoComputadora(puntosTotales_jugador)
    };
});

const turnoComputadora = (puntosMinimos) => {
    do {
        // se crea la carta y se pone el puntaje
        const carta = pedirCarta();
        puntosTotales_pc += valorCarta(carta);

        // se agrega en el html y se muestra el puntaje
        const imgCarta = document.createElement('img')
        imgCarta.src = `./assets/cards/${carta}.png`;
        imgCarta.classList = 'cards';
        cards_pc.appendChild(imgCarta);
        pc_score.innerHTML = puntosTotales_pc;


        if (puntosMinimos > 21) {
            break;
        }
        //condicionales
        if (puntosTotales_pc == 21 && puntosTotales_jugador == 21) {
            let mensaje = 'Empate';
            alert(mensaje);
        }
        else if (puntosTotales_pc > puntosTotales_jugador && puntosTotales_jugador < 21 && puntosTotales_pc <= 21) {
            let mensaje = 'Computadora gana';
            alert(mensaje);
            break;
        }
        else if (puntosTotales_pc > 21) {
            let mensaje = 'Jugador gana';
            alert(mensaje);
        } else if (puntosTotales_jugador == puntosTotales_pc) {
            let mensaje = 'Nadie gana';
            alert(mensaje);
        }
    }
    while ((puntosTotales_pc < puntosMinimos) && puntosTotales_pc <= 21);
}

const desabilitarBotones = () => {
    btn_new_card.disabled = true;
    btn_stop.disabled = true;
}

const valorCarta = (carta) => {
    let puntos = 0;
    const valor = carta.substring(0, carta.length - 1);// de todo el numero va a cortar la ultima letra
    console.log({ valor })

    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        puntos = valor * 1;//*1 para transformarlo a un int
    }
    return puntos;
};











