"use strict";
var L03;
(function (L03) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#weight");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayWeight);
    }
    function handleChange(_event) {
        let order = document.querySelector("div#character");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let weight = Number(item.getAttribute("weight"));
            character.innerHTML += item.name + "  kg " + weight;
        }
    }
    function displayWeight(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03 || (L03 = {}));
//# sourceMappingURL=L03.js.map