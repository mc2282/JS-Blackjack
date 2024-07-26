import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador;
let puntosComputadora;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');

// Esta función inicializa el juego 
const inicializarJuego = (numJugadores = 2) => {

    deck = []
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerHTML = 0;
    puntosHTML[1].innerHTML = 0;

    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    crearCartaHTML(carta, 0);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], deck);

    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], deck);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});


