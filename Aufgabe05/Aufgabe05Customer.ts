namespace Aufgabe05 {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", fillFieldset2);
    document.addEventListener("DOMContentLoaded", changeListener);

    function init(_event: Event): void {
        console.log(assoProducts);
        displayAssoArray(assoProducts);
    };

    function displayAssoArray(_assoArray: assoArray): void {

        for (let key in _assoArray) {
            let value: products[] = _assoArray[key];
            if (key == "treeSpecies" || key == "holder" || key == "shipment") { for (let i: number = 0; i < value.length; i++) fillFieldsetCheck(value[i], i, key); }
            if (key != "treeSpecies" && key != "holder" && key != "shipment") { for (let i: number = 0; i < value.length; i++) fillFieldset(value[i], i, key); }

        }
    }

    //Change Listener
    function changeListener(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");

        fieldset.addEventListener("change", handleChange);

    }

    let adress: string = "";
    let checkTree: number = 0;
    let checkHolder: number = 0;
    let checkShipping: number = 0;

    function fillFieldsetCheck(_products: products, i: number, key: string): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML: string;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        }

        let radio: HTMLElement = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", _products.typ);
        radio.setAttribute("value", "0");
        radio.setAttribute("title", _products.name);
        radio.setAttribute("price", _products.price.toFixed());
        radio.setAttribute("item", _products.typ);
        radio.setAttribute("id", _products.name);
        document.getElementById(key).appendChild(radio);
        let radioLabel: HTMLElement = document.createElement("label");
        radioLabel.setAttribute("for", _products.name);
        radioLabel.innerText = _products.name + " " + _products.price.toFixed() + " Euro";
        document.getElementById(key).appendChild(radioLabel);
    }

    function fillFieldset(_products: products, i: number, key: string): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML: string;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        }

        let option: HTMLElement = document.createElement("p");
        option.setAttribute("value", _products.name + " " + _products.price + " Euro");
        option.innerText = _products.name + " " + _products.price + " Euro";
        document.getElementById(key).appendChild(option);
        let steper: HTMLElement = document.createElement("input");
        steper.setAttribute("type", "number");
        steper.setAttribute("name", " Stepper");
        steper.setAttribute("step", "1");
        steper.setAttribute("min", "0");
        steper.setAttribute("max", "50");
        steper.setAttribute("value", "0");
        steper.setAttribute("item", _products.typ);
        steper.setAttribute("title", _products.name);
        steper.setAttribute("price", _products.price.toFixed());
        document.getElementById(key).appendChild(steper);

    }

    //Adresse
    function fillFieldset2(): void {
        document.getElementById("button").addEventListener("click", checkCheckout);
        let fieldset: HTMLElement = document.getElementById("fieldset2");

        fieldset.addEventListener("change", handleChange);
        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        document.getElementById("fieldset2").appendChild(input);
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //console.log(target);
        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let div: HTMLElement = document.getElementById("div");
        let section: HTMLElement = document.getElementById("selectedArticle");
        section.innerHTML = "";

        for (let i: number = 0; i < articles.length - 1; i++) {
            let article: HTMLInputElement = articles[i];
            let section: HTMLElement = document.getElementById("selectedArticle");
            let p: HTMLElement = document.createElement("p");
            let articleTyp: string = article.getAttribute("item");
            let articleName: string = article.getAttribute("title");
            let articlePrice: number = parseInt(article.getAttribute("price"));
            if (article.type == "radio") {
                //console.log(target.getAttribute("value"));
                //abfrage ob angew�hlt
                if (article.checked == true) {
                    article.setAttribute("value", "1");
                    if (target.name == "Tree") {
                        checkTree = 1;
                    }
                    if (target.name == "Holder") {
                        checkHolder = 1;
                    }
                    if (target.name == "Delivery options") {
                        checkShipping = 1;
                    }

                }
                else if (article.checked == false) {
                    article.setAttribute("value", "0");
                }
                //let articleAmount: number = parseInt(article.getAttribute("value"));
                //console.log(articleAmount);

            }

            let domAmount: string = target.value;
            target.setAttribute("value", domAmount);
            let articleAmount: number = parseInt(article.getAttribute("value"));
            let price: number = articlePrice * articleAmount;
            p.setAttribute("price", price.toString());
            if (articleAmount > 0) {
                p.innerText += articleTyp + ": " + articleAmount + " " + articleName + " " + price + " Euro";
            }

            section.appendChild(p);
        }

        if (target.id == "ad") {
            let adresse: HTMLElement = document.createElement("p");
            adresse.setAttribute("id", "adress");
            adresse.innerText = "Adress: " + target.value;
            adress = target.value;
            div.appendChild(adresse);
        }
        calcPrice();
    }

    function calcPrice(): void {
        let checkout: HTMLElement = document.getElementById("selectedArticle");
        let price: number = 0;
        console.log(checkout.childNodes);
        for (let i: number = 0; i < checkout.childNodes.length; i++) {
            let article: any = checkout.childNodes[i]
            let articlePrice: number = Number(article.getAttribute("price"));
            console.log(articlePrice);
            price += articlePrice;
            let showPrice: HTMLElement = document.createElement("div");
            showPrice.setAttribute("id", "box");
            document.getElementById("div").appendChild(showPrice);
            showPrice.innerText = "total price: " + price.toString() + " Euro";
        }
        //console.log(price);
    }

    function checkCheckout(_event: Event): void {
        if (adress == "" || checkTree == 0 || checkHolder == 0 || checkShipping == 0) {
            document.getElementById("missing").innerHTML = "missing information";
        }
        else {
            document.getElementById("missing").innerHTML = "no missing info";
        }
    }
}