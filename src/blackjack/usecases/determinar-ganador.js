/**
 * Funcion que calcula quien es el ganador
 * @param {Number} puntosMinimos 
 * @param {Number} puntosComputadora 
 */
export const determinarGanador = (puntosMinimos, puntosComputadora) => {

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}

export default determinarGanador;