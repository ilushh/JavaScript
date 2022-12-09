"use strict";

//-------------------------------------------------------- Vergleichoperatoren für Numbers-------------------------------------

console.log(42 == 42); // gucken ob 42 ist gleich 42 ist = true

console.log(42 != 32); //ungleichoperator 42 ist nicht 32 = true

console.log(42 > 44); // testen ob 42 größer gleich 44 ist = false

// <= kleiner oder gleichgroß



//-------------------------------------------------------- Vergleichoperatoren für Strings-------------------------------------
console.log("K" == "k"); //false

//--------------------------------------------------------dynamische Typsicherheit-------------------------------------------
let zahl1 = "92";
let zahl2 = 94;
console.log(zahl1 + zahl2); //.......aneinandert konkatiniert 9294 
console.log("92" == 92); //..........true, beide Datentypen werden eineinander angeglichen damit man sie vergleichen kann

//console.log(===);.................die Zahlen müssen strickt gleich sein 



//--------------------------------------------logische Operatoren "und" &&. "oder" ||. "nicht" !-------------------------

console.log( 1 > 0 && 0 < 1 );  //wir gucken ob beides erfüllt ist, ja sind sie, also true

console.log( 1 > 0 || 0 > 1 );  // ist eine der bedingung true? true