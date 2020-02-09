"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var L11;
(function (L11) {
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Grüezi");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access_Control-Allow-Origin", "*");
        _response.write("RESPONSE");
        if (_request.url) {
            let url = Url.parse(_request.url, true); //übersetzen, lesbares assoziatives Array durch true
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>"); //Werte ausgeben
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(L11 = exports.L11 || (exports.L11 = {}));
//# sourceMappingURL=Server.js.map