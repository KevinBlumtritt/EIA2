"use strict";
var Aufgabe00;
(function (Aufgabe00) {
    function Funktion() {
        var person = prompt("Bitte gib deinen Namen ein");
        var node = document.getElementById("html");
        var content = "";
        content += "Moin ";
        content += person;
        content += "! Alles klar?";
        console.log(content);
        node.innerHTML = content;
    }
    document.addEventListener("DOMContentLoaded", Funktion);
})(Aufgabe00 || (Aufgabe00 = {}));
//# sourceMappingURL=Project01.js.map