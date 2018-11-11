namespace UnoGame03 {
    document.addEventListener("DOMContentLoaded", input);
    document.addEventListener("keydown", pressKeyboard); //EventListener zum Drücken einer Taste (Leertaste)

    interface Unocard {
        color: string;
        value: string;
    }

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Unocard[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }]; //Array für alle Karten
    let cache: Unocard[] = [];

    for (let i: number = 0; i < colors.length; i++) {
        for (let j: number = 0; j < values.length; j++) {
            for (let k: number = 0; k < 2; k++) {
                let card: Unocard = { color: colors[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);


    let handcards: Unocard[] = [];

    function input(): void {
        let numCards: string = prompt("How many cards do You need?");
        let numberofcards: number = parseInt(numCards); //strings zu Ganzzahlen

        randomCard(numberofcards);
        displayHand();

        let ColorSorting: HTMLElement = document.getElementById("ColorSorting");
        ColorSorting.addEventListener("click", sortCards);

        let pull: HTMLElement = document.getElementById("DrawPile");
        pull.addEventListener("click", pullFromDrawPile);
    }


    function randomCard(_anz: number): void {
        for (let anz: number = _anz; anz > 0; anz--) { //jeder Durchlauf um 1 abgezogen
            let r: number = Math.floor(Math.random() * cards.length); //Karte aus cards gelöscht
            handcards.push(cards[r]); //ins Handcards Array gepusht
            cards.splice(r, 1); // an Position r wird nächste Karte abgezogen
        }
    }


    function pullFromDrawPile(): void {
        randomCard(1);
        displayHand();
    }


    function pressKeyboard(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) //keyCode 32 = Leertaste 
        {
            pullFromDrawPile();
        }

    }


    function discard(_event: MouseEvent): void {
        document.getElementById("DiscardPile").innerHTML = "";
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        cache.push(handcards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("DiscardPile").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }


    function displayHand(): void {
        document.getElementById("HandCards").innerHTML = "";
        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("HandCards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id: string = b.toString();
            div.setAttribute("id", id);
            div.classList.add("HandCards");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", discard);

        }
    }



    function sortCards(): void {
        console.log(handcards);
        document.getElementById("HandCards").innerHTML = "";
        handcards.sort(function(a: Unocard, b: Unocard): number {
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


}