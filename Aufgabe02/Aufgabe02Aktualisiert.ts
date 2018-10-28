namespace Uno {
    interface Unocard {
        color: string;
        value: string;
    }

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Unocard[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }];

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
        let n: number = parseInt(numberofcards);

        for (let anz: number = n; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }

        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("HandCards").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("HandCards");
            div.classList.add(handcards[b].color);
        }

    }
    document.addEventListener("DOMContentLoaded", Eingabe);
}