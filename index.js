const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    // if (req.url === '/health') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    //     res.end('OK');
    // } else 
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end("Git -> Jenkins -> ECR -> ECS CI/CD 테스트입니다.\n");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
