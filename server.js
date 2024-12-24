const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Docker on Amazon Linux 2023!, Docker running!\n');
});

const PORT = 80;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
