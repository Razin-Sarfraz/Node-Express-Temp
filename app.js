const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log("Starting server");
    res.end("Hello world")
  })
  .listen(5000);
