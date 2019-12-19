"use strict";
var L09_Classes;
(function (L09_Classes) {
    window.addEventListener("load", handleLoad);
    let snowflakeArray = [];
    let birdArray = [];
    function handleLoad(_event) {
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Classes.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 20; i++) {
            let bird = new L09_Classes.Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }
        for (let i = 0; i < 120; i++) {
            let snowflake = new L09_Classes.Snowflake(2);
            console.log("new flake");
            snowflakeArray.push(snowflake);
        }
        window.setInterval(update, 20);
        function update() {
            console.log("Update");
            L09_Classes.crc2.clearRect(0, 0, L09_Classes.crc2.canvas.width, L09_Classes.crc2.canvas.height);
            L09_Classes.crc2.putImageData(L09_Classes.image, 0, 0);
            for (let i = 0; i < birdArray.length; i++) {
                birdArray[i].draw();
                birdArray[i].move(100);
            }
            for (let i = 0; i < snowflakeArray.length; i++) {
                snowflakeArray[i].draw();
                snowflakeArray[i].move(100);
            }
        }
    }
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Classes_Main.js.map