namespace L11 {

    window.addEventListener("load", init);
    window.addEventListener('contextmenu', function (e) { e.preventDefault(); }); //verhindert context menu Aufruf bei Recktsklick

    export let crc2: CanvasRenderingContext2D;

    //let position: Vector;
    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    export let throwSnowball: Snowball;
    let throwBirdfood: Birdfood;
    let bird: Bird;
    let fps: number = 20;
    let node: HTMLDivElement;
    let wroteScore: boolean = false;
    //export let velocity: Vector;
    export let score: number = 1030; //score at game start
    let startbutton: HTMLButtonElement;

    export let url: string = "https://eiamitspeck.herokuapp.com/";


    function init(_event: Event): void {
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "none";

        startbutton = <HTMLButtonElement>document.getElementById("startbutton");
        startbutton.addEventListener("click", handleLoad);

    }

    function handleLoad(_event: Event): void {

        score = 1030;
        console.log("starting");

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[id=sendData]");
        submit.addEventListener("click", nameAndScore);

        document.getElementById("startscreen").style.display = "none";
        document.getElementById("game").style.display = "initial";

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        canvas.addEventListener("click", handleLeftClick); 
        canvas.addEventListener("contextmenu", handleRightClick);

        let highscorebutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highscorelistbutton");
        highscorebutton.addEventListener("click", gethighscorelist);
        
        document.getElementById("highscorelist").addEventListener("click", gethighscorelist);



        for (let i: number = 0; i < 20; i++) {
            bird = new Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }

        for (let i: number = 0; i < 120; i++) {
            let snowflake: Snowflake = new Snowflake(1.8);
    
            snowflakeArray.push(snowflake);
        }

    }

    let finalscore : number = window.setInterval(generateScore, 1000);

    function generateScore(): void {
        console.log(score);
        score--;
    }

    window.setInterval(update, fps); 

    function update(): void {
        // console.log("Update");

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(image, 0, 0);


        for (let i: number = 0; i < birdArray.length; i++) {
            birdArray[i].draw();
            birdArray[i].move(1);
        }

        for (let i: number = 0; i < snowflakeArray.length; i++) {
            snowflakeArray[i].draw();
            snowflakeArray[i].move(1);
        }

        if (throwSnowball) {
            throwSnowball.draw();
            if (throwSnowball.size >= 0.18)
                throwSnowball.size -= 0.18;
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

    function handleRightClick(_client: MouseEvent): void {

        score--;

        let birdfoodVector: Vector = new Vector(_client.offsetX, _client.offsetY);
        throwBirdfood = new Birdfood(4, birdfoodVector);


        for (let bird of birdArray) {
            if (isNear(bird.position, _client)) {
                bird.job = TASK.FLYTOFOOD;
                bird.velocity = Vector.getDifference(new Vector(throwBirdfood.position.x + Math.random() * (30 - 10) + 10, throwBirdfood.foodVerticalPosition + Math.random() * (30 - 10) + 10), bird.position);
                bird.velocity.scale(0.01); 
                setTimeout(bird.isPicking, 100 * fps);
               

                if (bird.velocity.x != 0) {
                    bird.job = TASK.EAT;
                }
            }

        }

    }

    function isNear(_hotspot: Vector, _client: MouseEvent): boolean {
        let nearsize: number = 187;
        let getDifference: Vector = Vector.getDifference(_hotspot, new Vector(_client.offsetX, _client.offsetY));
        return (nearsize >= getDifference.length)
    }

    function handleLeftClick(_client: MouseEvent): void {

        score--;

        let snowballVector = new Vector(_client.offsetX, _client.offsetY);
        throwSnowball = new Snowball(6, snowballVector);

        window.setTimeout(getBirdHitbox, 320, snowballVector);

    }

    function getBirdHitbox(_hotspot: Vector): void {

        for (let bird of birdArray) {

            if (bird.isHit(_hotspot)) {
                deleteBird(bird);
                //return;
            }
        }
    }


    function deleteBird(_bird: Bird): void {

        let index: number = birdArray.indexOf(_bird);
        birdArray.splice(index, 1); 

        if (birdArray.length <= 0) {
            console.log("ALL BIRDS ARE HIT");
            showGameOverScreen();
        }
    }


    export function showGameOverScreen(): void {

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[id=sendData]");

        submit.addEventListener("click", nameAndScore);
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        node = <HTMLDivElement>document.getElementsByClassName("yourScore")[0];
        //score
        clearInterval(finalscore);
        scoreToHTML();
        //sendData(userName, score);
        console.log(score);
    }


    function scoreToHTML(): void {
        if (!wroteScore) {
            let content: string = "";
            content = "YOUR SCORE: " + score;
            node.innerHTML += content;
            wroteScore = true;
        }
    }


      function nameAndScore(): void {
        console.log("end");
        let insertedname: any = prompt("Your Score: " + score + "\n Enter your name.");
        if (insertedname != null) {
            sendtohighscorelist(insertedname, score);
        }
    }
    

    async function sendtohighscorelist(_insertedName: string, _score: number): Promise<void> {

        let query: string = "name=" + _insertedName + "&score=" + _score;
        let response: Response = await fetch(url + "?" + query);
        console.log(response);

    }
    
    async function gethighscorelist(): Promise<void> {

        console.log("Highscores ausgeben");
        let query: string = "command=retrieve";
        let response: Response = await fetch(url + "?" + query);
        let responseJson: string[] = await response.json();
        for (let index = 0; index < responseJson.length; index++) {
            delete responseJson[index]["_id"];
        }
        let sortedJson = responseJson.sort(({ score: aScore }: string, { score: bScore }: string)=> bScore - aScore);
        let output = "";
        for (let index = 0; index < sortedJson.length; index++) {
            output += sortedJson[index].name + " - " + sortedJson[index].score + "\n";
        }
        let scores: HTMLDivElement = <HTMLDivElement>document.querySelector("div#showScores");
        scores.innerText = output;
    }



}
