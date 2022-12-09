"use strict";


// Zeilenumruch und Einrückung

let zeilenumbruch = "asdfghj" +
"\nTEST"+
"\t\t\ hier steht eine Einrückung";
console.log(zeilenumbruch);


// ----------------------------------------Template Strings shift + ``
let vorname = "Jülide";
let nachname = "Kalt";
let alter = 30;

let names = vorname + " " + nachname;
console.log(names);

// ----------------------------------------Variable ins Dollar die man auflösen möchte.-------------
let begruessung = `Hallo ${names}!`;
console.log(begruessung);

//----------------------------------------Templatestrings mit Absätzen----------------------------
let zusammenfassung = `Hallo mein Vorname ist ${vorname} 
und mein Nachname ist ${nachname} ich bin
${alter} Jahre alt.`;
console.log(zusammenfassung);


