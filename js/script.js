let nome = prompt ('Inserisci il nome');

let cognome = prompt ('Inserisci il cognome');

let colorePreferito = prompt ('Inserisci il colore preferito');

let yearOfBirth = prompt ('In che hanno sei nato?');

const actualYear = 2022;

let età = actualYear - yearOfBirth;

let datiLogin = nome + cognome  + colorePreferito + età;

console.log (nome, cognome, colorePreferito + età);

document.getElementById ('output').innerHTML = datiLogin;