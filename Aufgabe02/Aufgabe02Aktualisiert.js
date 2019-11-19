"use strict";
var Uno;
(function (Uno) {
    document.addEventListener("DOMContentLoaded", input);
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < 2; k++) {
                let card = { color: colors[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let handcards = [];
    function input() {
        let numberofcards = prompt("How many cards do You need?");
        let n = parseInt(numberofcards);
        for (let anz = n; anz > 0; anz--) {
            let r = Math.floor(Math.random() * cards.length);
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("HandCards").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("HandCards");
            div.classList.add(handcards[b].color);
        }
    }
})(Uno || (Uno = {}));
//# sourceMappingURL=Aufgabe02Aktualisiert.js.map