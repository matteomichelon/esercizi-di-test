/* 
Stampa le mail con console.log dall'ultima alla prima
 */

//Inserisci le mail in un Array e il benvenuto
var mail = [
    "mail@mail.it",
    "mail1@mail.it",
    "mail2@mail.it",
    "mail3@mail.it",
    "mail4@mail.it"
];

//mail.length lunghezza di 5! ma ultimo elemento dell'indice è 4 perchè array parte da 0 quindi la lunghezza dell'array .lengh -1

for ( var i = mail.length - 1; i >= 0; i-- ) {
    console.log( mail[i] );
}

