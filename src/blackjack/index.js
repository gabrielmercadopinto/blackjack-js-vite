import _ from "underscore";
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Tréboles)
 * 2H = Two of Hearts (Tréboles)
 * 2S = Two of Spades (Tréboles)
 */

let deck            = [];
const tipos         = ['C', 'D', 'H', 'S'];
const especiales    = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


deck = crearDeck(tipos, especiales);


// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Game Over');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }else if( puntosJugador === 21 ) {  
        console.warn('Win');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);     
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
    puntosComputadora = puntosJugador = 0;
    deck = crearDeck(tipos, especiales);

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});