/**
 *  Esta funcion calcular el valor de la carta.
 * @param {string} carta // obtiene el nombre de la carta
 * @returns {number} // retorna un numero entero, el valor de la carta
 */


export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}

export default valorCarta;