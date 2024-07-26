/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck // es un arreglo de string
 * @returns {String} // retorna la carta del deck
 */


export const pedirCarta = (deck) => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

export default pedirCarta;