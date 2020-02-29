
require('uWebSockets.js').App()
.get('/benchmarks', (res, _req) => {
    res.end(JSON.stringify( { hello: 'benchmarks' } ));
}).listen(3000, (_listenSocket) => {});