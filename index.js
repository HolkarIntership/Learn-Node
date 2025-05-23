const fs = require("fs");
const http = require("http");

const myServer = http.createServer((req, res) => {
  fs.appendFile("example.txt", req.url + " Get a New Req URl" + "\n", (err) => {
    console.log(err);
  });

  res.writeHead(200, { "Content-Type": "application/json" });

  let data = {
    name: "Deepak Singh",
    number: "2345346",
  };
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to My Server</h1>
    
</body>
</html>`;
  switch (req.url) {
    case "/":
      res.end("Welcome to the Home page");
      break;
    case "/about":
      res.end("Hello I am Deepak Singh");
      break;
    case "/contact":
      res.end(JSON.stringify(data));
      break;
    case "/service":
      res.end(html);
      break;

    default:
      res.end("404 Not Found");
      break;
  }
});

let port = 8000;

myServer.listen(port, "localhost", () => {
  console.log(`Server is running on port localhost:${port}`);
});
