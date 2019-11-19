"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Modul wird als HTTP Objekt importiert
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Consolelog wird mit der Nachricht "Starting server" ausgegeben
    let port = process.env.PORT; //Stellt den PORT als number ein (Heroku) 
    if (port == undefined) //Falls Port nicht definiert ist,
        port = 8100; //Port soll die nummer 8100 haben (verbindet Heroku mit EIA2)
    let server = Http.createServer(); //variable server wird als typ Http.Server und wird als Http.creatserver Funktion gleichgesetzt
    server.addListener("request", handleRequest); //Fügt einen Listener hinzu der dem Händler bescheid gibt wenn handleRequest getriggert wurde
    server.addListener("listening", handleListen); //solange der Käufer auf die Funktion zugreift, sieht der Händler das.
    server.listen(port); //schaut zu was für ein Port verwendet wird. (8100)
    function handleListen() {
        console.log("Listening"); //Console.log "Listening" wird ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // gibt Consolelog "I hear voices!" aus
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt in den HTML header "content-type" und text/html; charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin wird auch in den Header gesetzt, damit die antwort des Codes mit dem Nutzer geteilt wird.
        _response.write(_request.url); //gibt bei _response.write eine angefragte URL aus             
        _response.end(); //beendet die Schleife der _response
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map