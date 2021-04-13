/* Document Ready */
$( document ).ready( function () {

    //===
    // Creare un array di oggetti: 
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
    // nome e peso. Stampare a schermo la bici con peso minore.
    //===

    // Creo un arrai di bici da corsa
    arrayBici = [
        {
            'nome': 'bici1',
            'peso': 30
        },
        {
            'nome': 'bici2',
            'peso': 40
        },
        {
            'nome': 'bici3',
            'peso': 50
        },
        {
            'nome': 'bici4',
            'peso': 20
        }
    ];

    // Creo un ciclo for per leggere all'interno del mio array
    var objectStamp = arrayBici[ 0 ];

    for ( var i = 0; i < arrayBici.length; i++ ) {

        var thisBici = arrayBici[ i ];
        if ( thisBici.peso < objectStamp.peso ) {
            objectStamp = thisBici;
        }

    }
    console.log( "nome bici: " + objectStamp.nome, "\npeso bici: " + objectStamp.peso );

} );
/* end Document Ready */