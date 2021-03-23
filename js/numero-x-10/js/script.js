//Il software deve chiedere per 10 volte all'utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

var totaleNumeri = 0;

for ( var i = 0; i < 10; i++ ) {
    var numero = parseInt( prompt( 'Dimmi un numero' ) );
    //console.log( numero );
    totaleNumeri = totaleNumeri + numero;
    //console.log( totaleNumeri );
}

alert( "il totale dei numeri inseriti è " + totaleNumeri );

