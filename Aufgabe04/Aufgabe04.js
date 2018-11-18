var Aufgabe04;
(function (Aufgabe04) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    //Change Listener
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let priceTree = 0;
    let priceHolder = 0;
    let priceBalls = 0;
    let priceLametta = 0;
    let priceCandle = 0;
    let priceShipping = 0;
    let numberOfBalls = 0;
    let numberOfLametta = 0;
    let numberOfCandle = 0;
    let adress = "";
    function fillFieldset() {
        console.log("");
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML;
        //Tree
        childNodeHTML = "<h3>Tree</h3>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i = 0; i < Aufgabe04.treeSpecies.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.treeSpecies[i].name + " " + Aufgabe04.treeSpecies[i].price + " Euro'>" + Aufgabe04.treeSpecies[i].name + " " + Aufgabe04.treeSpecies[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Holder
        childNodeHTML += "<h3>Holder</h3>";
        for (let i = 0; i < Aufgabe04.holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + Aufgabe04.holder[i].name + " " + Aufgabe04.holder[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe04.holder[i].name + " " + Aufgabe04.holder[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";
        //Christmas balls
        childNodeHTML += "<h3>Christmas balls</h3>";
        childNodeHTML += "<select name='Select' id='Christmas balls'>";
        for (let i = 0; i < Aufgabe04.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.christmasBall[i].name + " " + Aufgabe04.christmasBall[i].price + " Euro'>" + Aufgabe04.christmasBall[i].name + " " + Aufgabe04.christmasBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Amount</h3>";
        childNodeHTML += "<select name='Select' id='Amount1'>";
        for (let i = 0; i < 41; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lametta
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='Lametta'>";
        for (let i = 0; i < Aufgabe04.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.lametta[i].name + " " + Aufgabe04.lametta[i].price + " Euro'>" + Aufgabe04.lametta[i].name + " " + Aufgabe04.lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Length</h3>";
        childNodeHTML += "<select name='Select' id='Amount2'>";
        for (let i = 0; i < 6; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Candles
        childNodeHTML += "<h3>Lighting</h3>";
        childNodeHTML += "<select name='Select' id='Lighting'>";
        for (let i = 0; i < Aufgabe04.candleTyp.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.candleTyp[i].name + " " + Aufgabe04.candleTyp[i].price + " Euro'>" + Aufgabe04.candleTyp[i].name + " " + Aufgabe04.candleTyp[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Amount</h3>";
        childNodeHTML += "<select name='Select' id='Amount3'>";
        for (let i = 0; i < 21; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Delivery options
        childNodeHTML += "<h3>Delivery options</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i = 0; i < Aufgabe04.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe04.shipment[i].name + " " + Aufgabe04.shipment[i].price + " Euro'>" + Aufgabe04.shipment[i].name + " " + Aufgabe04.shipment[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Adress
        childNodeHTML += "<h3>Adress</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        //Trees
        if (target.id == "trees") {
            let node = document.getElementById("tree");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTree = Aufgabe04.treeSpecies[priceIndex].price;
            //console.log(priceTree);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Holder
        if (target.name == "Radiogroup") {
            let node = document.getElementById("holder");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceHolder = Aufgabe04.holder[priceIndex].price;
            console.log(priceHolder);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "Christmas balls") {
            let node = document.getElementById("ball");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls = Aufgabe04.christmasBall[priceIndex].price;
            console.log(priceBalls);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Amount1") {
            let node = document.getElementById("ballAmount");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            console.log(numberOfBalls);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lametta
        if (target.id == "Lametta") {
            let node = document.getElementById("lametta");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceLametta = Aufgabe04.lametta[priceIndex].price;
            console.log(priceLametta);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Amount2") {
            let node = document.getElementById("lamettaAmount");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            console.log(numberOfLametta);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Kerzen
        if (target.id == "Lighting") {
            let node = document.getElementById("candle");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle = Aufgabe04.candleTyp[priceIndex].price;
            console.log(priceCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Amount3") {
            let node = document.getElementById("candleAmount");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            console.log(numberOfCandle);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lieferoption
        if (target.id == "ship") {
            let node = document.getElementById("shipping");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceShipping = Aufgabe04.shipment[priceIndex].price;
            console.log(priceShipping);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Adress
        if (target.id == "ad") {
            let node = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let node = document.getElementById("price");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + priceHolder + (priceBalls * numberOfBalls) + (priceLametta * numberOfLametta) + (priceCandle * numberOfCandle) + priceShipping);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkCheckout(_event) {
        if (adress == "" || priceTree == 0 || priceHolder == 0 || priceBalls == 0 || priceLametta == 0 || priceCandle == 0 || priceShipping == 0 || numberOfBalls == 0 || numberOfLametta == 0 || numberOfCandle == 0) {
            document.getElementById("missing").innerHTML = "Missing information";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe04 || (Aufgabe04 = {}));
//# sourceMappingURL=Aufgabe04.js.map