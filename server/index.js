const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from Server");
  } else if (req.url == "/about") {
    res.end("Request comes from About Page");
  } else {
    res.end("404 Page not found..!");
  }
});

server.listen(8000, () => console.log(`http://localhost:8000`));
