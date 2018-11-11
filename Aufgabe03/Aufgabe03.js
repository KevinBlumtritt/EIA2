var UnoGame03;
(function (UnoGame03) {
    document.addEventListener("DOMContentLoaded", input);
    document.addEventListener("keydown", pressKeyboard); //EventListener zum Dr�cken einer Taste (Leertaste)
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }]; //Array f�r alle Karten
    let cache = [];
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
        let numCards = prompt("How many cards do You need?");
        let numberofcards = parseInt(numCards); //strings zu Ganzzahlen
        randomCard(numberofcards);
        displayHand();
        let ColorSorting = document.getElementById("ColorSorting");
        ColorSorting.addEventListener("click", sortCards);
        let pull = document.getElementById("DrawPile");
        pull.addEventListener("click", pullFromDrawPile);
    }
    function randomCard(_anz) {
        for (let anz = _anz; anz > 0; anz--) {
            let r = Math.floor(Math.random() * cards.length); //Karte aus cards gel�scht
            handcards.push(cards[r]); //ins Handcards Array gepusht
            cards.splice(r, 1); // an Position r wird n�chste Karte abgezogen
        }
    }
    function pullFromDrawPile() {
        randomCard(1);
        displayHand();
    }
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            pullFromDrawPile();
        }
    }
    function discard(_event) {
        document.getElementById("DiscardPile").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        cache.push(handcards[index]);
        let div = document.createElement("div");
        document.getElementById("DiscardPile").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }
    function displayHand() {
        document.getElementById("HandCards").innerHTML = "";
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("HandCards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id = b.toString();
            div.setAttribute("id", id);
            div.classList.add("HandCards");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", discard);
        }
    }
    function sortCards() {
        console.log(handcards);
        document.getElementById("HandCards").innerHTML = "";
        handcards.sort(function (a, b) {
            if (a.color > b.color) {
                return 1;
            }
            if (a.color < b.color) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });
        console.log(handcards);
        displayHand();
    }
})(UnoGame03 || (UnoGame03 = {}));
//# sourceMappingURL=Aufgabe03.js.map