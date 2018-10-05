
function Funktion(): void {
var person = prompt("Bitte gib deinen Namen ein");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Moin " + person + "! Alles klar?";
    }
}