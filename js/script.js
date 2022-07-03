
function checker(){
    var eingabe;

    eingabe = parseInt(prompt("Na, wie schnell waren Sie denn?"));

    if(eingabe < 100){
        document.getElementById("ergebnis").innerHTML = "Sie sind bei " + eingabe + " erwischt worden - kein Problem, Sie waren wohl zu Fuß unterwegs.";
    } else if(eingabe <150){
        document.getElementById("ergebnis").innerHTML = "Sie sind bei " + eingabe + " erwischt worden - Das kostet 100 Euronen.";
    } else if(eingabe < 200){
        document.getElementById("ergebnis").innerHTML = "Sie sind bei " + eingabe + " erwischt worden - Das wird teuer. Bestimmt 350 und und 3 Monate Flugverbot.";
    } else if(eingabe >= 200){
        document.getElementById("ergebnis").innerHTML = "Sie sind bei " + eingabe + " erwischt worden - Sie sind Ihren Führerschein los.";
    } else{
        document.getElementById("ergebnis").innerHTML = "Bitte eine Zahl eingeben!";
    }
}