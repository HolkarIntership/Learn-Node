const fs = require("fs");
const http = require("http");

const url = require("url");

let port = 8000;

const myServer = http.createServer((req, res) => {
  fs.appendFile("example.txt", req.url + " Get a New Req URl" + "\n", (err) => {
    console.log(err);
  });

  // const myurl = url.parse("https://www.youtube.com/results?search_query=hitesh+choudhary");
  // const myurl = url(`http://localhost:${port}${req.url}`);

  // url.URLSearchParams

  // console.log("myurl..", myurl.);

  // const myURL = new URL("https://example.org/?abc=123");
  // const myURL = new URL(`http://localhost:${port}${req.url}`);
  // const myURL = new url.URLSearchParams(`http://localhost:${port}${req.url}`);
  // console.log(myURL);
  // console.log(myURL.searchParams);
  // console.log(myURL.searchParams());
  // console.log(myURL.searchParams.get());

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
      if (req.url === "/") {
        res.end("Welcome to the Home page!");
      } else {
        res.end(html);
      }
      break;
    case "/about":
      res.end("Hello I am Deepak Singh");
      console.log("url..", myurl);
      break;
    case "/contact":
      res.end(JSON.stringify(data));
      break;
    case "/service":
      res.end(html);
      break;

    case "/search":
      if (req.method === "GET") {
        console.log("req", req.method);

        res.end("search Data ");
      }
      break;
      case "/login":
        res.end("login Data ");
        break;

    default:
      res.end("404 Not Found");
      break;
  }
});

myServer.listen(port, "localhost", () => {
  console.log(`Server is running on port localhost:${port}`);
});
