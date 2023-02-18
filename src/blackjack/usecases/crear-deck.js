import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposCartas Ejemplo: ['C', 'D', 'H', 'S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCartas, tiposEspeciales) => {
    if( !tiposCartas || tiposCartas.length === 0) 
    throw new Error('TiposCarta es obligatorio como un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tiposCartas) {
        for (const especial of tiposEspeciales) {
            deck.push(especial + tipo)
        }
    }

    deck = _.shuffle(deck);
    return deck;
}