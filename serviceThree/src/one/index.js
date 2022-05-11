const h = require('http');
const PORT = process.env.PORT;
const s = h.createServer((q,r) => {
    r.writeHead(200, {'Content-Type': 'text/plain'});
    r.end('9 Hello World.\n');
}).listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});
module.exports = s;