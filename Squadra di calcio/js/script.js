/* Document Ready */
$( document ).ready( function () {

    //===
    // Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    // Generare numeri random al posto degli 0 nelle proprietà:
    // Punti fatti e falli subiti
    //===

    //Creo un array di oggetti quadre di calcio
    var squadreDiCalcio = [

        {
            'nome': 'Vicenza',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Torino',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Roma',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Milan',
            'punti_fatti': 0,
            'falli_subiti': 0
        }
    ];

    // Creo un ciclo per leggere tutti gli oggetti all'interno del mio array
    for ( var i = 0; i < squadreDiCalcio.length; i++ ) {

        // Creo una variabile della squadra attualmente attiva nel mio ciclo
        var thisSquadra = squadreDiCalcio[ i ];

        // Creo 2 variabili di numeri random da 1 a 10 per i punti fatti e i falli subiti
        var puntiFattiRandom = Math.floor( Math.random() * 10 ) + 1;
        var falliSubitiRandom = Math.floor( Math.random() * 10 ) + 1;

        // Modifico i valori attuali del mio array
        thisSquadra.punti_fatti = puntiFattiRandom;
        thisSquadra.falli_subiti = falliSubitiRandom;

        // Stampo a video il risultato
        console.log( "La squadra " + thisSquadra.nome + " ha totalizzato " + thisSquadra.punti_fatti + " punti e ha subito " + thisSquadra.falli_subiti + " falli.\n" );

    };


} );
/* end Document Ready */