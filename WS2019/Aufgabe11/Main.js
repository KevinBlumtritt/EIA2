"use strict";
var L11;
(function (L11) {
    window.addEventListener("load", handleLoad);
    window.addEventListener('contextmenu', function (e) { e.preventDefault(); }); //verhindert context menu Aufruf bei Recktsklick
    //let position: Vector;
    let snowflakeArray = [];
    let birdArray = [];
    let throwBirdfood;
    let bird;
    let fps = 20;
    //export let velocity: Vector;
    let score = 1030; //score at game start
    function handleLoad(_event) {
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11.crc2 = canvas.getContext("2d");
        /* let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        console.log("SUBMIT");
        // sucht Button vom Typ "submit" im HTML und installiere darauf click-Listener */
        canvas.addEventListener("click", handleLeftClick); //bei Linksklick wird "handleLeftClick" aufgerufen
        canvas.addEventListener("contextmenu", handleRightClick); //bei Rechtsklick wird "handleRightClick" aufgerufen
        //submit.addEventListener("click", sendScore);
        window.setInterval(generateScore, 1000);
        for (let i = 0; i < 20; i++) {
            bird = new L11.Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }
        for (let i = 0; i < 120; i++) {
            let snowflake = new L11.Snowflake(1.8);
            //  console.log("new flake");
            snowflakeArray.push(snowflake);
        }
        /* for (let i: number = 0; i < 10; i++) {
            let pickingbird: PickingBird = new PickingBird(1.8);
            //  console.log("new bird");
            pickingbirdArray.push(pickingbird);
        } */
        function generateScore() {
            console.log(score);
            score--;
        }
    }
    window.setInterval(update, fps); //update Funktion wird alle 20ms aufgerufen (neuer frame wird generiert)
    function update() {
        // console.log("Update");
        L11.crc2.clearRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        L11.crc2.putImageData(L11.image, 0, 0);
        for (let i = 0; i < birdArray.length; i++) {
            birdArray[i].draw();
            birdArray[i].move(1);
        }
        for (let i = 0; i < snowflakeArray.length; i++) {
            snowflakeArray[i].draw();
            snowflakeArray[i].move(1);
        }
        if (L11.throwSnowball) {
            L11.throwSnowball.draw();
            if (L11.throwSnowball.size >= 0.18)
                L11.throwSnowball.size -= 0.18;
        }
        if (throwBirdfood) {
            throwBirdfood.draw();
            if (throwBirdfood.size >= 3.4)
                throwBirdfood.size -= 0.08;
            if (throwBirdfood.size >= 3.3)
                throwBirdfood.size -= 0.00055;
            if (throwBirdfood.size <= 3.3 && throwBirdfood.size >= 0.0187)
                throwBirdfood.size -= 0.0187;
            /*if (throwBirdfood.size <= 0.01)
                console.log("COOKIE IS GONE");*/
        }
    }
    function handleRightClick(_client) {
        score--;
        let birdfoodVector = new L11.Vector(_client.offsetX, _client.offsetY);
        throwBirdfood = new L11.Birdfood(4, birdfoodVector);
        for (let bird of birdArray) {
            if (isNear(bird.position, _client)) {
                bird.job = L11.TASK.FLYTOFOOD;
                bird.velocity = L11.Vector.getDifference(new L11.Vector(throwBirdfood.position.x + Math.random() * (30 - 10) + 10, throwBirdfood.foodVerticalPosition + Math.random() * (30 - 10) + 10), bird.position);
                bird.velocity.scale(0.01); //unterteilt die Strecke 
                setTimeout(bird.isPicking, 100 * fps);
                // angegebene Zahl lässt Vogel auf dem Vektor entlangfliegen --> muss mulitpliziert mit scale = 1 sein
                if (bird.velocity.x != 0) {
                    bird.job = L11.TASK.EAT;
                }
            }
        }
    }
    function isNear(_hotspot, _client) {
        let nearsize = 187;
        let getDifference = L11.Vector.getDifference(_hotspot, new L11.Vector(_client.offsetX, _client.offsetY));
        return (nearsize >= getDifference.length);
    }
    function handleLeftClick(_client) {
        score--;
        let snowballVector = new L11.Vector(_client.offsetX, _client.offsetY);
        L11.throwSnowball = new L11.Snowball(6, snowballVector);
        window.setTimeout(getBirdHitbox, 320, snowballVector);
        //nach 320ms wird bird collision abgefragt, snowballVector übergibt Parameter
    }
    function getBirdHitbox(_hotspot) {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot)) {
                deleteBird(bird);
                //return;
            }
        }
    }
    function deleteBird(_bird) {
        let index = birdArray.indexOf(_bird);
        birdArray.splice(index, 1); //index sucht an welcher Stelle Bird im Array ist --> löscht an dieser Stelle eine Instanz heraus
        if (birdArray.length <= 0) {
            console.log("ALL BIRDS ARE HIT");
            location.replace("EndScreen.html"); //Verlinkung zum Endscreen
        }
    }
    /*async function sendScore(_event: Event): Promise<void> {
        console.log("SEND SCORE")
        let query: URLSearchParams = new URLSearchParams;
        await fetch("index.html?" + query.toString());
        alert("SENT!")
    }*/
})(L11 || (L11 = {}));
//# sourceMappingURL=Main.js.map