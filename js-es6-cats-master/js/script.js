// Definire un array di oggetti; ogni oggetto rappresenta un 
// gatto, che è caratterizzato da: nome, età, colore e sesso.

// Tramite la funzione .forEach(), stampare in pagina 
// tutti i gattini, ciascuno con il proprio colore e il 
// proprio nome.

//abbiamo dei gattini 
const cats = [ {
  name: 'Adam',
  age: 0.3,
  color: '#00ffff',
  gender: 'male'
},
{
  name: 'Emily',
  age: 0.8,
  color: '#f700ff',
  gender: 'female'
},
{
  name: 'Willoby',
  age: 1.3,
  color: '#ff6600',
  gender: 'male'
},
{
  name: 'Poppy',
  age: 0.2,
  color: '#00ff00',
  gender: 'female',
},
];

cats.forEach( ( element ) => {
  //console.log( element.name, element.color );
} );

// Dividere i gatti in due contenitori distinti in base al sesso 
// e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. 
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

/* const maleCats = cats.filter( ( element, filter, array ) => {

  return element.gender == 'male';

} ); */

//const maleCats = cats.filter( ( element ) => element.gender == 'male' );
//console.log( maleCats );

// const femaleCats = cats.filter( ( element ) => element.gender == 'female' );
//console.log( femaleCats );

// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
// inserendo solamente nome e colore e opacità del fiocco per ogni gatto.

/* const newArrayCats = [ ...maleCats, ...femaleCats ];
console.log( newArrayCats ); */

cats.forEach( ( element, index, array ) => {
    

} );
const maleCats = cats.filter( ( element ) => element.gender == 'male' );
  const femaleCats = cats.filter( ( element ) => element.gender == 'female' );