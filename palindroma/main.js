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
  return lettersArray.reverse();
}
console.log(wordDivider(userWord));
let reverseWord = wordDivider(userWord);

function isPalindroma(wordToVerify) {
  let lettersArray = wordToVerify.split("");

  let palindroma = false;
  if (lettersArray === reverseWord) {
    palindroma = true;
  }
  return palindroma;
}

console.log(isPalindroma(userWord));
