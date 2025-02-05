const http = require("http");
const fs = require("fs");
const { join } = require("path");
const { json } = require("stream/consumers");
  
const pathToFilename = {
    "/": "index.html",
    "/analysis": "analysis.html",
    "/categories": "categories.html",
    "/planning": "planning.html",
    "/api/expenses": "expenses.json"
}

http.createServer(function(request, response){
      
    console.log(`Запрошенный адрес: ${request.url}`);

    let filePath = pathToFilename[request.url] ?? request.url.substring(1)

    fs.readFile(filePath, function(error, data){
              
        if(error){
            response.statusCode = 404;
            fs.readFile('404.html', function(error, data) {
                response.end(data);
            });
        }   
        else{
            if (filePath == "expenses.json") {
                console.log(JSON.stringify(JSON.parse(data)))
                response.setHeader("Content-Type", "application/json; charset=utf-8;")
                response.end(JSON.stringify(JSON.parse(data)))
                return
            }
            response.end(data);
        }
    });
}).listen(3000, function(){
    console.log("Server started at 3000");
});