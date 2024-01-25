// Funzioni
// una funzione è un blocco di codice riutilizzabile
// PUO' (opzionalmente) ricevere dei valori in ingresso (input)
// PUO' (opzionalmente) avere un valore di ritorno (output)

// definiamo una funzione semplice SENZA INPUT e SENZA OUTPUT

// 1) momento della dichiarazione della funzione (funzione VOID perché non ha un return)
function bark() {
  // all'interno del body o corpo della funzione vado a definire tutte le operazioni che dovranno eseguirsi in sequenza
  // nel momento in cui la funzione verrà richiamata o eseguita
  console.log("BAU");
}
// in console in questo momento NON C'E' NULLA!

// DICHIARARE (o definire) una funzione non significa eseguire il suo codice!

// le istruzioni contenute all'interno potranno essere eseguite se e solo se la funzione verrà chiamata (eseguita)

// 2) momento dell'esecuzione della funzione:
bark();

// definiamo una funzione che ritorni qualcosa, quindi CON UN OUTPUT
// una funzione che ritorna qualcosa si definisce fruttifera (fruitful function)

function sum() {
  const result = 10 + 1;
  // console.log("result", result);
  // il return stabilisce la fine dell'esecuzione del contesto di una funzione
  return result;
  // non ci può essere nulla dopo un return, che DOVRA' essere l'ultima cosa
  console.log("ciao"); // non verrà mai letto
}

// console.log(result); // result non esiste nel contesto globale

// per avere il valore di ritorno di una funzione dovrò SICURAMENTE eseguirla e aspettarmi un risultato al suo posto
const returnedValueTimesTen = sum() * 10; // posso trattare la chiamata di funzione come IL VALORE CHE MI RITORNERA'
console.log(returnedValueTimesTen);
console.log(sum());

function randomNum() {
  const rNum = Math.floor(Math.random() * 1001);

  return rNum;
}

const randNums = [];

for (let i = 0; i < 30; i++) {
  const num = randomNum();
  randNums.push(num);
}

console.log(randNums);
// console.log(randomNum());

const fruitful = sum(); // questa è una funzione fruttifera, posso aspettarmi un valore di ritorno dalla sua esecuzione
const voidF = bark(); // questa è una funzione VOID, quindi NON fruttifera, e non avrà un valore di ritorno. in questo caso chiamarla produce solo undefined

console.log("Fruitful", fruitful);
console.log("Void", voidF);

// esempio di funzione void usata per il suo effetto collaterale (side effect)

let count = 0;

function addOne() {
  count += 3;
}

console.log(count);
const generatedNum = randomNum();

for (let i = 0; i < generatedNum; i++) {
  addOne();
}

console.log(count);

const animals = ["Parrot", "Mouse", "Cat", "Goldfish", "Dog", "Horse", "Bunny"];

function cloneAndReplaceElement() {
  // copiamo l'array per poi modificare la copia
  // const copiedArr = animals.concat()
  const copiedArr = animals.slice();
  const newElement = "Dragon";

  for (let i = 0; i < copiedArr.length; i++) {
    const stringToVerify = copiedArr[i];
    if (stringToVerify === "Dog") {
      // Se siamo qua è perché abbiamo trovato la stringa che cercavamo
      // come leggo la sua posizione?
      console.log("inidice di Dog:", i);
      copiedArr.splice(i, 1, newElement);
    }
  }

  return copiedArr;
}

const animalsCopyWithDragon = cloneAndReplaceElement();
console.log(animals);
console.log(animalsCopyWithDragon);

// esempi di funzioni con valori in ingresso (INPUT)
// nella definizione l'elemento tra parentesi si definisce PARAMETRO, acquisirà il valore dell'elemento passato in ingresso al momento della chiamata di funzione
// il numero di parametri possibile è infinito, è IMPORTANTISSIMO seguire l'ordine di dichiarazione dei parametri
// il parametro con un = si definisce un default parameter, entra in gioco quando il parametro non riceve valore e quindi è undefined
function sayHi(name, symbol = "") {
  console.log("Ciao " + name + symbol);
}

// esempio di chiamata di funzione con valore di input passato come ARGOMENTO alla funzione
sayHi("Epicoders", "!");
sayHi("Amanda", "#");
sayHi("Giovanni", "°");
sayHi("Matteo", "X");
sayHi("Stefano"); // il secondo argomento vuoto fa scattare il valore di default sul parametro symbol

// const names = ["Epicoders", "Amanda", "Giovanni", "Matteo", "Innocenzo", "Giuseppe"];
// for (let i = 0; i < names.length; i++) {
//   sayHi(names[i]);
// }

const animals2 = ["ant", "bison", "camel", "duck", "elephant"];

// ricreiamo la nostra funzione di replace, questa volta sfruttando i parametri

function findCloneAndReplace(arr, animalType, newElement) {
  // copiamo l'array per poi modificare la copia
  // const copiedArr = animals.concat()
  console.log("ARR", arr);

  if (Array.isArray(arr)) {
    const copiedArr = arr.slice();
    // const newElement = "Dragon";

    for (let i = 0; i < copiedArr.length; i++) {
      const stringToVerify = copiedArr[i];
      if (stringToVerify === animalType) {
        // Se siamo qua è perché abbiamo trovato la stringa che cercavamo
        // come leggo la sua posizione?
        console.log("inidice di " + animalType + ":", i);
        copiedArr.splice(i, 1, newElement);
      }
    }

    return copiedArr;
  } else {
    console.log("devi passare un array!");
  }
}

const newAnimalsArr = findCloneAndReplace(animals2, "duck", "cat");
console.log(newAnimalsArr);
const newAnimalsArr2 = findCloneAndReplace(animals2, "bison", "dog");
console.log(newAnimalsArr2);
