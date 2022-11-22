"use strict"; 


const car = {type:"VW", model: 500, color: "white"};

//---------------------------------------------------LISTE------------

let bestand = [];
bestand.push('Banane','Birne','Kirsche', car);
bestand.push('Kartoffel');
console.log(bestand);


/*-----------------------------------------Funktion mit Liste----------------
let einkaufwagen = [];

function nehmen(){

    einkaufwagen.push(bestand.pop());
    console.log(bestand.toString());
    console.log(einkaufwagen.toString());
}-----------------------------------------------------------------------------*/

if ('2'== 2){
    console.log("2 ist gleich 2");

}
//immer das letzte herausbekommen
let gemuse = ["Mais", "Gurke", "Möhren"];
console.log(gemuse[gemuse.length-1]);

//pop , um was zu löschen

//etwas addieren-----------------------
function addieren(wert1, wert2) {
    return wert1 + wert2;
  }
  console.log(addieren(0, 0));
  //--------------------------------------




  //const liste = () 

var liste = ['Kapern', 'Senf', 'Butter', 'Eier', 'Hackfleisch', 'Kartoffeln', 'Zwiebeln'];

for(var i = 0;i <liste.length; i++){
    liste.sort();
  console.log(liste[i]);
}

//-----------------------------------------------------------
function log_my_Data(logMsg = "Not defined") {
    console.log("[LOG]" + logMsg)
}
log_my_Data("Diesen Text Ausgeben");


//-------------------------------------------------------------
function summe(wert1, wert2){
   console.log(wert1 + wert2);
}
summe(20,45);


//--------------------------wenn ich nicht weiß wie viele parameter ich habe------------------------
function summe(... summanden) {
    if(summanden.length > 0){
        console.log(summanden)

        for(let i=0; i< summanden.length; i++){
            console.log(summanden[i])
        }
    }
   else{
    console.log("LALALALA");
   }
}
summe(7, 17, 77, 777);
summe();