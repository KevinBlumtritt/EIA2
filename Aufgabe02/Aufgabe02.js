"use strict";
/* namespace Aufgabe02 {

    function uno() {

        interface cards {
            name: string;
            red: number;
            blue: number;
            green: number;
            yellow: number;
        }

        let k0: cards = {
            name: "0",
            red: 1,
            blue: 1,
            green: 1,
            yellow: 1
        }

        let k1: cards = {
            name: "1",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k2: cards = {
            name: "2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k3: cards = {
            name: "3",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k4: cards = {
            name: "4",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k5: cards = {
            name: "5",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k6: cards = {
            name: "6",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k7: cards = {
            name: "7",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k8: cards = {
            name: "8",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let k9: cards = {
            name: "9",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let kr: cards = {
            name: "Reverse",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let kd2: cards = {
            name: "Draw2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let ks: cards = {
            name: "Skip",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        }

        let Allcards: cards[] = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kr, kd2, ks]
        let s1: number = 4
        let s2: number = 4
        let c: string = "";



        function random(x: number) {
            return Math.floor(Math.random() * Math.floor(x))
        };



        function placeDiv(_color: string, _v: string, _y: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            div.setAttribute("id", "a" + _y);
            document.getElementById("a" + _y).innerHTML += _v;
            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = (_y + 0.2) * 110 + "px";
            s.bottom = 40 + "px";
            if (_color == "black") {
                s.color = "white";
            }
            if (_color == "blue") {
                s.color = "white";
            }  //zur besseren Lesbarkeit wurde die Schrift bei schwarzen und blauen Karten zu 'weiß' geändert


        }

        let z: number;
        let input: string = prompt("How many cards do You want?"); //prompt-box wird geöffnet
        z = Number(input);


        for (let d: number = 0; d < z; d++) {
            let l = random(15);
            if (l == 13 && s1 > 0) {// Zahl entspricht 13 und schwarze Karten noch vorhanden
                c = "black"; //Farbe (c) auf schwarz gesetzt
                s1--; // eine schwarze Karte wird rausgenommen
                placeDiv(c, "WildDraw", d);
                continue;
            }

            else if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {
                    c = "black";
                    s2--;
                    placeDiv(c, "WildCard", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    let b: number = random(4);
                    switch (b) {
                        case 0:
                            c = "red";
                            if (Allcards[l].red > 0) {
                                placeDiv(c, Allcards[l].name, d);
                                Allcards[l].red--;
                                continue;
                            }
                        case 1:
                            c = "green";
                            if (Allcards[l].green > 0) {
                                placeDiv(c, Allcards[l].name, d);
                                Allcards[l].green--;
                                continue;
                            }

                        case 2:
                            c = "blue";
                            if (Allcards[l].blue > 0) {
                                placeDiv(c, Allcards[l].name, d);
                                Allcards[l].blue--;
                                continue;
                            }

                        case 3:
                            c = "yellow";
                            if (Allcards[l].yellow > 0) {
                                placeDiv(c, Allcards[l].name, d);
                                Allcards[l].yellow--;
                                continue;
                            }
                            else {
                                d--;
                                continue
                            }

                    }

                }

            }
        }
        function Stapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "CardDeck");
            document.getElementById("CardDeck").innerHTML += "CardDeck";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "lightgray";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = 50 + "px";
            s.top = 20 + "px";
        }

        function DiscardDeck() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "DiscardDeck");
            document.getElementById("DiscardDeck").innerHTML += "DiscardDeck";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "grey";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }

        DiscardDeck();
        Stapel();
    }

    document.addEventListener("DOMContentLoaded", (uno))


} */
//# sourceMappingURL=Aufgabe02.js.map