// Aggancio il bottone e la griglia a Java Script
const button = document.getElementById("start-button");
const grid = document.getElementById("grid");

// Dò al bottone l'evento del click per generare la griglia.
button.addEventListener("click", function () {
  grid.innerHTML = ""; //! Per svuotare al click */
  gridGenerator(); //** Aggancio alla funzione */
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
    this.classList.add("lightskyblue");
    console.log(i);
  });

  return cell;
}

//! Provo ad aggiungere i livelli di difficoltà...
