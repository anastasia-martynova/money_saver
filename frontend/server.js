const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {
    // TODO 
    // Смотришь на реквест, если / то дашборд, если analytics, то отдаешь analytics и тд
    // 404.html страничку

    console.log(`Запрошенный адрес: ${request.url}`);
    response.sendDate()
    const filePath = request.url.substring(1);
    fs.access(filePath, fs.constants.R_OK, err => {
        if (err) {
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            fs.createReadStream(filePath).pipe(response);
        }
    });
}).listen(3000, function () {
    console.log("Server started at 3000");
});