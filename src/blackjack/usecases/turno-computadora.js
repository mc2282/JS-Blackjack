import { crearCartaHTML, pedirCarta, valorCarta, determinarGanador } from './';

/**
 *  Turno de la computadora
 * @param {Number} puntosMinimos  // puntos minimos que la pc necesita para ganar
 * @param {HTMLElement} puntosHTML // elemento html para mostrar los puntos
 * @param {Array<String>} deck  
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, deck = []) => {

    if (!puntosMinimos) throw Error('PuntosMinimos son necesarios')
    if (!puntosHTML) throw Error('Arg puntosHTML es necesario')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta)
        puntosHTML.innerText = puntosComputadora;
        crearCartaHTML(carta, 1);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosMinimos, puntosComputadora);
}

export default turnoComputadora;