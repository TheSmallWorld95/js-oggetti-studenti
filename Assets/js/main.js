// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creo una variabile(oggetto) con all'interno elementi chiave-valore
var studenteA = {
  nome: "Fabio",
  cognome: "Colombo",
  età: "25 anni",
}

// Attraverso un ciclo(for-in) che si usa per gli oggetti
  // Stampo con .text le proprietà (tutte) come fosse una C.I.
for (var proprietà in studenteA) {
console.log(proprietà, studenteA[proprietà]);
}
$("#nome").text(studenteA.nome);
$("#cognome").text(studenteA.cognome);
$("#età").text(studenteA.età);

// Creo un array [] che contine più variabili(oggetto)
// che descrivano n studenti
var classe = [
  {
    nome: "Luca",
    cognome: "Zannino",
    età: "31 anni",
  },
  {
    nome: "Giacomo",
    cognome: "Casartelli",
    età: "19 anni",
  }
];

// Attraverso un ciclo(for) che si usa per le singole variabili
  // Stampo con .text le proprietà (solo nome e cognome) come fosse una C.I.
for (var i = 0; i < classe.length; i++) {
  console.log(classe[i].nome + " " + classe[i].cognome);
}
// Attraverso un input-form sull'HTML invio(bottone al click)
// le info che l'utente inserisce nel form
//  riguardo 3 nuovi studenti(variabile-oggetto)
  // Tramite push dopo il click
  // le inserisco nella variabile-oggetto creata precedentemente
