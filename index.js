// Edit 0

const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello',
  }));
});

server.on('listening', () => {
  console.log(`Listening port ${port}`);
});

server.on('error', (err) => {
  console.log(`Error in server. Error: ${err?.message}`);
});

process.on('SIGINT', () => {
  server.close();
});

process.on('SIGTERM', () => {
  server.close();
});

server.listen(port);
