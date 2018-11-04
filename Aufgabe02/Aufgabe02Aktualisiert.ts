namespace Uno {
    interface Unocard {
        color: string;
        value: string;
    }

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Unocard[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }]; //Array f�r alle Karten

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

    function Eingabe(): void {
        let numberofcards: string = prompt("How many cards do You need?");
        let n: number = parseInt(numberofcards); //strings zu Ganzzahlen

        for (let anz: number = n; anz > 0; anz--) { //jeder Durchlauf um 1 abgezogen
            let r: number = Math.floor(Math.random() * (cards.length - 1)); //Karte aus cards gel�scht
            handcards.push(cards[r]); //ins Handcards Array gepusht
            cards.splice(r, 1); // an Position r wird n�chste Karte abgezogen
        }

        for (let b: number = 0; b < handcards.length; b++) { //Rechne solange hoch, bis die L�nge der handcards erreicht ist
            let div: HTMLElement = document.createElement("div"); //erstelle im HTML ein Div
            document.getElementById("HandCards").appendChild(div); //erstellt ein Kind f�r id
            div.innerHTML = handcards[b].value; //Werte werden in Divs �bertragen
            div.classList.add("HandCards"); //Klasse erstellen f�r Farben
            div.classList.add(handcards[b].color); //Zuordnung der Farben zu den Handcards
        }

    }
    document.addEventListener("DOMContentLoaded", Eingabe);
}