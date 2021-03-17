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
  eta: "25 anni",
}
var stringa = "";
// Attraverso un ciclo(for-in) che si usa per gli oggetti
  // Stampo con .text le proprietà (tutte) come fosse una C.I.
for (var caratteristiche in studenteA) {
console.log(caratteristiche, studenteA[caratteristiche]);
// (mi riscrive tutte i valori di un oggetto)
// stringa += studenteA[caratteristiche] + " ";
}

// (Altro metodo per scrivere i valori presi singolarmente di un oggetto)
// stringa = studenteA.nome + " " + studenteA.cognome + " " + studenteA.età;
// $("#prova").text(stringa);

$(".studente1 .nome").text("Nome: " + studenteA.nome);
$(".studente1 .cognome").text("Cognome: " + studenteA.cognome);
$(".studente1 .età").text("Età: " + studenteA.eta);



// Creo un array [] che contine più variabili(oggetto)
// che descrivano n studenti
var classe = [
  {
    nome: "Luca",
    cognome: "Zannino",
    eta: "31 anni",
  },
  {
    nome: "Giacomo",
    cognome: "Casartelli",
    eta: "19 anni",
  }
];

// Attraverso un ciclo(for) che si usa per le singole variabili
  // Stampo con .text le proprietà (solo nome e cognome) come fosse una C.I.
for (var i = 0; i < classe.length; i++) {
  console.log(classe[i].nome + " " + classe[i].cognome);
}

$(".studente2 .nome").text("Nome: " + classe[0].nome);
$(".studente2 .cognome").text("Cognome: " + classe[0].cognome);
$(".studente2 .età").text("Età: " + classe[0].eta);

$(".studente3 .nome").text("Nome: " + classe[1].nome);
$(".studente3 .cognome").text("Cognome: " + classe[1].cognome);
$(".studente3 .età").text("Età: " + classe[1].eta);

// Attraverso un input-form sull'HTML invio(bottone al click)
// le info che l'utente inserisce nel form
//  riguardo 3 nuovi studenti(variabile-oggetto)
$("button").click(function () {
  var nome = "Nome: " + $("input[name = nome]").val()
  var cognome ="Cognome: " + $("input[name = cognome]").val()
  var anni = "Età: " + $("input[name = età]").val()

  var studente = {
    nome: nome,
    cognome: cognome,
    eta: anni,
  };

  classe.push(studente);

})
  // Tramite push dopo il click
  // le inserisco nella variabile-oggetto creata precedentemente
