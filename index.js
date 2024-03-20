const http = require("http");

const PORT = 8900;

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  res.write("OKEKE GODWIN OBIORA");
  res.end();
}

server.listen(PORT, () => {
  console.log(`Server is running sucessfully at http://localhost:${PORT}`);
});