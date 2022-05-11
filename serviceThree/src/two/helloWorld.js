const h = require ('http');
const s = h.createServer((q, r) => {
    r.end('Hello World!...');
});
s.listen(12000);