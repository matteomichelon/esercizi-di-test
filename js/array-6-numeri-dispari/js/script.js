// Crea un array vuoto. Chiedi per 6 volte all'utente 
//di inserire un numero, se è dispari inseriscilo nell'array

var mioArray = [];

for ( i = 0; i < 6; i++ ) {
    var numeroInserito = parseInt( prompt( 'Dimmi un numero' ) );

    if ( numeroInserito % 2 != 0 ) {
        console.log( numeroInserito );
        mioArray.push( numeroInserito );
    }
}

alert( 'Hai inserito i seguenti numeri dispari ' + mioArray );

let nome = 'matteo';
let cognome = 'michelon';
let eta = 31;

const studente = {
    nome,
    cognome,
    eta
}

console.log( studente );