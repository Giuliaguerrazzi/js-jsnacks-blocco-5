// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.

// creare array di oggetti
// var biciclette = [
//
//  {
//   nome: 'Cinelli',
//   peso: 10
//  },
//  {
//   nome: 'Alan',
//   peso: 5
//  },
//  {
//    nome: 'Colnago',
//    peso: 13
//  }
// ];
//
// // handlebars
// // variabile per riferimento al template
// var source = $('#bike-template').html();
// var template = Handlebars.compile(source);
//
//
//
// var biciLeggera = biciclette[0];
//
// for (var i = 1; i < biciclette.length; i++) {
//   if (biciLeggera.peso > biciclette[i].peso) {
//     biciLeggera = biciclette[i];
//   }
// }
//
// console.log(biciLeggera);
//
// // valori dinamici del template
// var data = {
//   nome: biciLeggera.nome,
//   peso: biciLeggera.peso,
// }
//
// var html = template(data);
// $('body').append(html);


// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
//
// nameArray = ['Artemisia', 'Caravaggio', 'Vincent', 'Frida', 'Salvador', 'Claude'];
//
// var tot = nameArray.length - 1;
//
// chiedere numeri all'utente
// var num1 = parseInt( prompt('Definisci posizione iniziale con numero da 0 a ' + tot));
// var num2 = parseInt( prompt('Definisci posizione finale con numero da 0 a ' + tot));
//
// var newArray = [];
//
// // loop per l'array e pushare il valore corrispettivo all'indice
// for (var i = 0; i < nameArray.length; i++) {
//   if (num1 <= i && num2 >= i) {
//     newArray.push(nameArray[i])
//   }
// }
//
// console.log(nameArray);
// console.log(num1, num2);
// console.log(newArray);


// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.

var oggettiArray = [
  {
    nome: 'Artemisia',
    colore: 'rosso',
  },
  {
    nome: 'Caravaggio',
    colore: 'blu',
  },
  {
    nome: 'Frida',
    colore: 'verde',
  },
  {
    nome: 'Salvador',
    colore: 'giallo',
  }
];

// copiare array
var newoggettiArray = [];

for (var i = 0; i < oggettiArray.length; i++) {
  var aggiungiOggetto = {
    nome: oggettiArray[i].nome,
    colore: oggettiArray[i].colore,
    position: generatePosition()
  }

  newoggettiArray.push(aggiungiOggetto);
}

console.table(oggettiArray);
console.table(newoggettiArray);

// function
// funzione che genera lettere random
function generatePosition() {
  var letters = 'abcdefghilmnopqrstuvz';

  var letter = letters [randomNumber(0, letters.length - 1)];
  return letter;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
