const h = require('http');
const s = h.createServer((q, r) => {
    r.end(new Date().toString());
});
s.listen(13000);