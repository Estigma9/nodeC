
const http = require('http');

// const handleServer = function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h1>Hello world from a Server with NodeJS</h1>');
//     res.end;
// };

const server = http.createServer();

server.listen(3000, ()=>{
    console.log('Server on port 3000');
});


