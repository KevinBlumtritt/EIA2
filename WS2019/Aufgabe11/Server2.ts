import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace L11 {

    let score: Mongo.Collection;
    let databaseURL: string;

    let dbName: string = "Database";
    let dbCollection: string = "Score";


    databaseURL = "mongodb+srv://eiamitspeck:eia2@clustereia-hsd7c.mongodb.net/test?retryWrites=true&w=majority";


    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    startServer(port);
    console.log("Server starting on port: " + port);

    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        score = mongoClient.db(dbName).collection(dbCollection);
        console.log("Database connection is ", score != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Whuzzup?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ":" + url.query[key] + "<br/>");
            // }

            if (url.query["command"] == "retrieve") {
                let report: any[] | string = await retrieveScore();
                if (report == "Please try again later")
                    _response.write(report);
                else
                    _response.write(JSON.stringify(report));
            }
            else {
                console.log("urlQuery: ", url.query);
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                score.insert(url.query); // gibt an, was in die collection eingetragen wird
                console.log(jsonString);
            }
        }
        _response.end();
    }

    async function retrieveScore(): Promise<any[] | string> {
        let cursor: Mongo.Cursor = await score.find().sort({score: -1});;
        let answer: Promise<any[]> = await cursor.toArray();
        console.log("DB CursorToArray", answer);
        if (answer != null) {
            return answer;
        }
        else
            return "Please try again later";
    }

}