/*
    Il computer deve generare 16 numeri casuali tra 1 e 100.
    I numeri non possono essere duplicati.
    In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
    L’utente non può inserire più volte lo stesso numero.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// 1- Generare 16 numeri bomba ( non duplicati ) e li metto in un array

var numBomb = [];
var numRandom = 0;

// 1.1- Dichiaro gli estremi (compresi) per cui il gioco debba continuare.
var numMin = 1;
var numMax = 100;
var numBombMax = 16;

while ( numBomb.length < numBombMax ) {

    numRandom = getRandomIntInclusive( numMin, numMax );

    if ( !numBomb.includes( numRandom ) ) {
        numBomb.push( numRandom );
    }
};

// 2- Creo una variabile array che contenga i numeri non bombe immessi dall'utente

var arrayNumUser = [];

// 2.1- Calcolo il valore massimo per cui l'utente debba inserire numeri
var maxUserInsert = numMax - numBombMax;

// 3- Creo una variabile Boolean flag che mi dice se è stata trovata una bomba

var nobomb = true;
var inputNumUser = -1;

// 4- Preparo un ciclo while dove controllo se ( non è stata trovata una bomba && il numero degli elementi inseriti dall'utente è inferiore al totale )

while ( nobomb && arrayNumUser.length < maxUserInsert ) {


    // chiedo un numero all'utente
    //inputNumUser = parseInt( prompt( "Inserisci un numero" ) );
    inputNumUser = getRandomIntInclusive( numMin, numMax );

    if ( arrayNumUser.includes( inputNumUser ) ) {
        alert( "hai già inserito questo numero" );
    } else if ( numBomb.includes( inputNumUser ) ) {
        nobomb = false;
    } else {
        arrayNumUser.push( inputNumUser );
    }
    console.log( "dentro la funzione", inputNumUser );

    // Se è una bomba, modifico flag
    // altrimenti se il numero non è già stato inserito .push array
}

// Stampo all'utente il lenght dell'array di numeri corretti inseriti

// Stampo se è stato inserito un numero bomba
// Altrimenti dichiaro l'utente vincitore del gioco
if ( inputNumUser != -1 ) {
    alert( "Sei riuscito ad inserire " + arrayNumUser.length + " numeri prima di trovare il numero bomba " + inputNumUser )
    console.log( inputNumUser );
} else {
    alert( "complimenti!" )
}


/* Funzioni */

function getRandomIntInclusive ( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min; //Il max è incluso e il min è incluso
}

/* if ( numUser.includes( numUser ) ) {
        alert( "hai già inserito questo numero" );
    } else  */
