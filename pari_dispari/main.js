/*
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer
*/

/* COME FARE:
- prompt per scegliere pari o dispari
- prompt per inserire numero da 1 a 5
- generiamo numero per AI
- somma numeri
- function per vedere se pari o dispari
- alert con vincitore
*/

const pariDispari = prompt("Pensi che il risultato sarà pari o dispari?");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5."));
console.log("Tu hai scelto" + " " + userNumber);
function randomNumber() {
  let result = Math.floor(Math.random() * 5) + 1;
  return result;
}

let aiNumber = randomNumber();

console.log("Il computer ha scelto" + " " + aiNumber);

if (pariDispari === "pari") {
  pari = true;
  console.log("Vuoi che il risultato sia pari");
} else if (pariDispari === "dispari") {
  pari = false;
  console.log("Vuoi che il risultato sia dispari");
}

function somma(num1, num2) {
  return num1 + num2;
}

let risultato = somma(userNumber, aiNumber);
console.log("La somma" + " " + "è" + " " + somma(userNumber, aiNumber));

function isPari(numero) {
  const result = numero % 2 === 0;

  return result;
}

console.log(isPari(risultato));

let pariSiNo = isPari(risultato);
console.log("E'" + " " + pariDispari + " " + pariSiNo);

if (pari == pariSiNo) {
  console.log("l'utente ha vinto");
} else if (pari != pariSiNo) {
  console.log("Ai vince");
}
