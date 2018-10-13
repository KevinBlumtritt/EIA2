namespace Aufgabe00 {
    function Funktion(): void {
        var person: string = prompt("Bitte gib deinen Namen ein");
        var node: HTMLElement = document.getElementById("html");
        var content: string ="";
        content += "Moin ";
        content += person;
        content += "! Alles klar?";
        console.log(content);
        node.innerHTML = content
    }
    document.addEventListener("DOMContentLoaded", Funktion);
}