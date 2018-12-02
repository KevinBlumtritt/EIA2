import * as Http from "http";               //Modul wird als HTTP Objekt importiert

namespace L06_SendData {                    //
    console.log("Starting server");         //Consolelog wird mit der Nachricht "Starting server" ausgegeben
    let port: number = process.env.PORT;    //Stellt den PORT als number ein (Heroku) 
    if (port == undefined)                  //Falls Port nicht definiert ist,
        port = 8100;                        //Port soll die nummer 8100 haben (verbindet Heroku mit EIA2)

    let server: Http.Server = Http.createServer();      //variable Server wird als typ Http.Server und als Http.createserver Funktion gleichgesetzt
    server.addListener("request", handleRequest);       //Fügt einen Listener hinzu der dem Händler bescheid gibt wenn handleRequest getriggert wurde
    server.addListener("listening", handleListen);      //solange der Käufer auf die Funktion zugreift, sieht das der Händler.
    server.listen(port);                                //schaut zu was für ein Port verwendet wird. (8100)

    function handleListen(): void {                 
        console.log("Listening");                       //Console.log "Listening" wird ausgegeben
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  //erstellt eine Funktion die bei einer Http.Incomingmessage, eine Http.ServerResponse zurück schickt
        console.log(_request.url);              // gibt Consolelog "I hear voices!" aus

        _response.setHeader("content-type", "text/html; charset=utf-8");        //setzt in den HTML header "content-type" und text/html; charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*");                //Access-Control-Allow-Origin wird auch in den Header gesetzt, damit die Antwort des Codes mit dem Nutzer geteilt wird.

        _response.write(_request.url);          //gibt bei _response.write eine angefragte URL aus             
        
        _response.end();                        //beendet die Schleife der _response
    }
}