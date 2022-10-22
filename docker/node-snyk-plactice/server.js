const http = require('node:http');

function handle(signal) {
    console.log(`*^!@4=> Received event: ${signal}`)
    process.exit(0)
}
process.on('SIGHUP', handle)

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
