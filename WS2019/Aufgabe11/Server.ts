import * as Http from "http";
import * as Url from "url";


export namespace L11 {
    let server: Http.Server = Http.createServer();

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    console.log("Server starting on port:" + port);    

    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Guten Tag");

        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access_Control-Allow-Origin", "*");
        
        _response.write("RESPONSE");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //übersetzen, lesbares assoziatives Array durch true
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>"); //Werte ausgeben

            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }

        _response.end();
        
    }
}
