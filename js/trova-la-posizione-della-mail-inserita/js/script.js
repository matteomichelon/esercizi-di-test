/* 
Trova un elemento specifico nella mia lista di array
 */

//Inserisci le mail in un Array e il benvenuto
var mail = [
    "mail@mail.it",
    "mail1@mail.it",
    "mail2@mail.it",
    "mail3@mail.it",
    "mail4@mail.it"
];

var emailDaTrovare = prompt("inserisci la mail da trovare la posizione");

var posizioneMailTrovata = -1;

var messaggio;

for ( i = 0; i < mail.length; i++ ) {

    var thisEmail = mail[i];

    if ( emailDaTrovare === thisEmail ) {
        posizioneMailTrovata = i;
    }
}

if ( posizioneMailTrovata === -1 ) {
    messaggio = " Mi spiace ma la mail non è presente nel nostro database";
} else {
    messaggio = "La mail " + emailDaTrovare + " è presente nella posizione " + posizioneMailTrovata;
}

alert( messaggio );
