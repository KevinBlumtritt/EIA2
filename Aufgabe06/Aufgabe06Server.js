"use strict";
const Http = require("http"); //Modul wird als HTTP Objekt importiert
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Consolelog wird mit der Nachricht "Starting server" ausgegeben
    let port = process.env.PORT; //Stellt den PORT als number ein (Heroku) 
    if (port == undefined)
        port = 8100; //Port soll die nummer 8100 haben (verbindet Heroku mit EIA2)
    let server = Http.createServer(); //variable Server wird als typ Http.Server und als Http.createserver Funktion gleichgesetzt
    server.addListener("request", handleRequest); //F�gt einen Listener hinzu der dem H�ndler bescheid gibt wenn handleRequest getriggert wurde
    server.addListener("listening", handleListen); //solange der K�ufer auf die Funktion zugreift, sieht das der H�ndler.
    server.listen(port); //schaut zu was f�r ein Port verwendet wird. (8100)
    function handleListen() {
        console.log("Listening"); //Console.log "Listening" wird ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); // gibt Consolelog "I hear voices!" aus
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt in den HTML header "content-type" und text/html; charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin wird auch in den Header gesetzt, damit die Antwort des Codes mit dem Nutzer geteilt wird.
        _response.write(_request.url); //gibt bei _response.write eine angefragte URL aus             
        _response.end(); //beendet die Schleife der _response
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Aufgabe06Server.js.map