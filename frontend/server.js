const http = require("http");
const fs = require("fs");
const { join } = require("path");
const { json } = require("stream/consumers");

const pathToFilename = {
  "/": "index.html",
  "/analysis": "analysis/analysis.html",
  "/categories": "categories/categories.html",
  "/planning": "planning/planning.html",
};

function delay(timeMS){
  return new Promise(function(resolve, reject) {
    setTimeout(function () {resolve()}, timeMS)}
  )
}

const data = {
  expenses: [
    {
      expenseId: "0",
      date: new Date("2025-01-17"),
      cost: 1000,
      category: "grocery",
    },
    {
      expenseId: "1",
      date: new Date(),
      cost: 500,
      category: "grocery",
    },
    {
        expenseId: "2",
        date: new Date(),
        cost: 700,
        category: "grocery",
      },
    {
        expenseId: "3",
        date: new Date(),
        cost: 1700,
        category: "grocery",
      }
  ],
};

function handleAPIRequests(request, response) {
  response.setHeader("Content-Type", "application/json; charset=utf-8;");
  if (request.url === "/api/expenses") {
    sorted_data = structuredClone(data);
    sorted_data.expenses.sort(function(a, b){
      return new Date(b.date) - new Date(a.date);
    })
    response.end(JSON.stringify(sorted_data))
  }
  if (request.url.includes("new_expense")){
    let postValue = ''
    request.on("data", function(chunk) {
        console.log("----------")
        postValue += chunk
    })
    request.on("end", () => {
        data.expenses.push(JSON.parse(postValue))
        response.end()
    })
}
}

function handleStatic(url, response) {
  let filePath = pathToFilename[url] ?? url.substring(1);
  fs.readFile(filePath, function (error, data) {
    if (error) {
      response.statusCode = 404;
      fs.readFile("error/404.html", function (error, data) {
        response.end(data);
      });
    } else {
      response.end(data);
    }
  });
}

function isApiRequest(request) {
  return request.url.includes("api/");
}

http
  .createServer(function (request, response) {

    if (isApiRequest(request)) {
      handleAPIRequests(request, response);
      return;
    }

    handleStatic(request.url, response);
  })
  .listen(3000, function () {
    console.log("Server started at 3000");
  });
