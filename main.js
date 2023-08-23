// Aggancio il bottone e la griglia a Java Script
const button = document.getElementById("start-button");
const grid = document.getElementById("grid");
let bombsNumbers = [];
let finalScore = 0;

// Dò al bottone l'evento del click per generare la griglia.
button.addEventListener("click", function () {
  grid.innerHTML = ""; //! Per svuotare al click */
  gridGenerator(); //** Aggancio alla funzione */

  //! Al click genero 16 numeri casuali da 1 a 100..

  while (bombsNumbers.length < 16) {
    const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    if (!bombsNumbers.includes(randomNumber)) {
      bombsNumbers.push(randomNumber);
    }
  }
  console.log(bombsNumbers);
});

// Creo la funzione per generare la griglia in modo riciclabile
function gridGenerator() {
  //** Creo un ciclo for per le celle */
  for (let i = 1; i <= 100; i++) {
    //** Creo una cella */
    const cell = cellGenerator(i);

    //** uso append per aggiungere la cella alla griglia */
    grid.append(cell);
  }
}

// Creo una funzione riciclabile per generare le celle
function cellGenerator(i) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerHTML = i;

  cell.addEventListener("click", function () {
    if (bombsNumbers.includes(i)) {
      this.classList.add("redbomb");
      alert(
        "Hai Perso! Riavvia la pagina e rigioca! " + "Score: " + finalScore
      );
      /* grid.innerHTML = ""; */
    } else {
      this.classList.add("lightskyblue");
      finalScore++;
      if (finalScore == 100 - 16) {
        alert("complimenti, hai vinto! " + "Score: " + finalScore);
      }
    }
    console.log(i);
  });

  return cell;
}

// Se il numero cliccato è presente nell'array, e verrà colorato di rosso...
//allora verrà colorato di rosso e appare un alert "hai perso"
// altrimenti si continua a cliccare e i tasti diventano blu

//per il punteggio, dovrei aggiungere ogni elemento cliccato ad
//un array e poi mostrare il risultato finale su schermo...
