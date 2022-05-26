//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*COME FARE:
- crea una const con un prompt per chiedere la parola all'utente
- creiamo una function che divide la parola in lettere e la salva in un array magari in ordine inverso
- function che controlla se le lettere della parola originale corispondono a quelle della parola rovescia.
- salva il booleano 
- stampa il risultato
*/

const userWord = prompt("Per favore inserisci una parola da verificare!");

function wordDivider(word) {
  let lettersArray = word.split("");
  return lettersArray.reverse().join();
}
let reverseWord = wordDivider(userWord);

console.log(reverseWord);

function wordToString(wordToVerify) {
  let lettersArray = wordToVerify.split("");

  //   let palindroma = false;
  //   if (lettersArray === reverseWord) {
  //     palindroma = true;
  //   }
  return lettersArray.join(); // penso che qui non salvo come si deve il risultato
}

console.log(wordToString(userWord));

if (wordToString(userWord) === wordDivider(userWord)) {
  console.log("La parola" + " " + userWord + " " + "è palindroma");
} else {
  console.log("La parola" + " " + userWord + " " + "non è palindroma");
}
