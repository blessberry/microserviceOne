const h = require('http');
const PORT = 12345;
const s = h.createServer((q,r) => {
    r.writeHead(200, {'Content-Type': 'text/plain'});
    r.end('1 Hello World.\n');
}).listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});