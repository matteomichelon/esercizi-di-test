/* Vue */

var app = new Vue(
    {
        el: '#root',
        /* DATA */
        data: {
            pushText: '',
            userFilterText: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    filter: true,
                    isDone: false
                },
                {
                    text: 'Fare la spesa',
                    filter: true,
                    isDone: false
                },
                {
                    text: 'Fare il bucato',
                    filter: true,
                    isDone: false
                }
            ],
        },

        /* METHODS */
        methods: {

            // Aggiunge nuove stringhe all'array 
            // di stringhe todos
            pushTextOnArray () {
                if ( this.pushText.length > 0 ) {
                    const newObject = {
                        text: this.pushText,
                        filter: true,
                        isDone: false
                    }
                    this.todos.push( newObject );
                }
                this.pushText = "";
            },

            // Aggiunge un colore alla stringa 
            // quando il todo è done:true
            thisDone ( index ) {
                const object = this.todos[ index ];
                object.isDone = !object.isDone;
            },

            // Rimuove stringa dall'array
            // di stringa todos
            deleteThisFromArray ( index ) {
                const arrayTodos = this.todos;
                arrayTodos.splice( index, 1 );
            },

            // Filtra stringa per l'utente
            filterTodos () {
                this.todos.forEach( ( element ) => {

                    let valueSearch = element.text.toLowerCase().includes( this.userFilterText.toLowerCase() );

                    if ( valueSearch ) {
                        element.filter = true;
                    } else {
                        element.filter = false;
                    }

                } );

            },

            // Filtra todo da fare
            filterIsDoneFalse () {
                this.todos.forEach( ( element ) => {
                    if ( element.isDone ) {
                        element.filter = false
                    }

                } );
            }

        }
    }
);

/* end Vue */


