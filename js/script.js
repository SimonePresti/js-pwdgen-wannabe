let nome = prompt ('inserisci il nome');

let cognome = prompt ('inserisci il cognome');

let colorePreferito = prompt ('inserisci il colore preferito');

const numero = Number (22);

let datiLogin = nome + cognome + colorePreferito + numero;

console.log (nome, cognome, colorePreferito );

document.getElementById ('output').innerHTML = datiLogin;