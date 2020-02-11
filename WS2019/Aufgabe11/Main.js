"use strict";
var L11;
(function (L11) {
    window.addEventListener("load", init);
    window.addEventListener('contextmenu', function (e) { e.preventDefault(); }); //verhindert context menu Aufruf bei Recktsklick
    //let position: Vector;
    let snowflakeArray = [];
    let birdArray = [];
    let throwBirdfood;
    let bird;
    let fps = 20;
    let node;
    let wroteScore = false;
    //export let velocity: Vector;
    L11.score = 1030; //score at game start
    let startbutton;
    L11.url = "https://eiamitspeck.herokuapp.com/";
    function init(_event) {
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        startbutton = document.getElementById("startbutton");
        startbutton.addEventListener("click", handleLoad);
    }
    function handleLoad(_event) {
        L11.score = 1030;
        console.log("starting");
        let submit = document.querySelector("button[id=sendData]");
        submit.addEventListener("click", nameAndScore);
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("game").style.display = "initial";
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleLeftClick);
        canvas.addEventListener("contextmenu", handleRightClick);
        let highscorebutton = document.getElementById("highscorelistbutton");
        highscorebutton.addEventListener("click", gethighscorelist);
        document.getElementById("highscorelist").addEventListener("click", gethighscorelist);
        for (let i = 0; i < 20; i++) {
            bird = new L11.Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }
        for (let i = 0; i < 120; i++) {
            let snowflake = new L11.Snowflake(1.8);
            snowflakeArray.push(snowflake);
        }
    }
    let finalscore = window.setInterval(generateScore, 1000);
    function generateScore() {
        console.log(L11.score);
        L11.score--;
    }
    window.setInterval(update, fps);
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
        L11.score--;
        let birdfoodVector = new L11.Vector(_client.offsetX, _client.offsetY);
        throwBirdfood = new L11.Birdfood(4, birdfoodVector);
        for (let bird of birdArray) {
            if (isNear(bird.position, _client)) {
                bird.job = L11.TASK.FLYTOFOOD;
                bird.velocity = L11.Vector.getDifference(new L11.Vector(throwBirdfood.position.x + Math.random() * (30 - 10) + 10, throwBirdfood.foodVerticalPosition + Math.random() * (30 - 10) + 10), bird.position);
                bird.velocity.scale(0.01);
                setTimeout(bird.isPicking, 100 * fps);
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
        L11.score--;
        let snowballVector = new L11.Vector(_client.offsetX, _client.offsetY);
        L11.throwSnowball = new L11.Snowball(6, snowballVector);
        window.setTimeout(getBirdHitbox, 320, snowballVector);
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
        birdArray.splice(index, 1);
        if (birdArray.length <= 0) {
            console.log("ALL BIRDS ARE HIT");
            showGameOverScreen();
        }
    }
    function showGameOverScreen() {
        let submit = document.querySelector("button[id=sendData]");
        submit.addEventListener("click", nameAndScore);
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        node = document.getElementsByClassName("yourScore")[0];
        //score
        clearInterval(finalscore);
        scoreToHTML();
        //sendData(userName, score);
        console.log(L11.score);
    }
    L11.showGameOverScreen = showGameOverScreen;
    function scoreToHTML() {
        if (!wroteScore) {
            let content = "";
            content = "YOUR SCORE: " + L11.score;
            node.innerHTML += content;
            wroteScore = true;
        }
    }
    function nameAndScore() {
        console.log("end");
        let insertedname = prompt("Your Score: " + L11.score + "\n Enter your name.");
        if (insertedname != null) {
            sendtohighscorelist(insertedname, L11.score);
        }
    }
    async function sendtohighscorelist(_insertedName, _score) {
        let query = "name=" + _insertedName + "&score=" + _score;
        let response = await fetch(L11.url + "?" + query);
        console.log(response);
    }
    async function gethighscorelist() {
        console.log("Highscores ausgeben");
        let query = "command=retrieve";
        let response = await fetch(L11.url + "?" + query);
        let responseJson = await response.json();
        for (let index = 0; index < responseJson.length; index++) {
            delete responseJson[index]["_id"];
        }
        let sortedJson = responseJson.sort(({ score: aScore }, { score: bScore }) => bScore - aScore);
        let output = "";
        for (let index = 0; index < sortedJson.length; index++) {
            output += sortedJson[index].name + " - " + sortedJson[index].score + "\n";
        }
        let scores = document.querySelector("div#showScores");
        scores.innerText = output;
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=Main.js.map