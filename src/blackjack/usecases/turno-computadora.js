import {pedirCarta, valorCarta, crearCartaHTML} from './';

/**
 * Turno de la Computadora
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if(!puntosMinimos)
        throw new Error('Puntos minimos son necesarios');
    
    if(!puntosHTML)
        throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora += valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

    } while ( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );

    setTimeout(() => {
        
        const empate = puntosComputadora === puntosMinimos;
        const jugadorGana = puntosMinimos === 21 
        || (puntosComputadora > 21 && puntosMinimos < 21);

        if (empate) {
            alert('Empate');
        }else if (jugadorGana) {
            alert('Jugador Gana')
        }else{
            alert('Computadora Gana');
        }
        
    }, 500);

}