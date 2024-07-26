/**
 * Funcion de crear carta en el HTML
 * @param {String} carta 
 * @return {HTMLImageElement}
 */

export const crearCartaHTML = (carta, rol) => {
    let divCartas;

    if (rol === 0) {
        divCartas = document.getElementById('jugador-cartas')
    } else {
        divCartas = document.getElementById('computadora-cartas')
    }

    const imgCarta = document.createElement('img');
    imgCarta.src = `./src/cards/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append(imgCarta);
}

export default crearCartaHTML;