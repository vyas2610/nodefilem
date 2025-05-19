const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from Server");
});

server.listen(8000, () => console.log("Server Started"));
