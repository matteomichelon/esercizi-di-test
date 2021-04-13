/* Document Ready */
$( document ).ready( function () {

    //===
    // Creare un oggetto palla che abbia le seguenti proprietà.
    // Nome = palla
    // Peso = 10
    // Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
    //===

    // Oggetto Palla
    var palla = {
        'nome': 'palla',
        'peso': 10
    };

    // Stampo a video il peso della palla attuale
    console.log( "Il peso della palla attuale è: " + palla.peso );

    // Chiedo all'utente il nuovo peso della palla
    var nuovoPeso = parseInt( prompt( "Inserisci il nuovo peso della palla" ) );

    // Cambio il valore della proprietà peso nell'oggetto
    palla.peso = nuovoPeso;

    // Stampo a video il nuovo peso della palla
    console.log( "\nIl nuovo peso è: " + palla.peso );

} );
/* end Document Ready */