const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to my page')
    }
    if(req.url === '/about'){
        res.end('You are in the About page')
    }
    req.end(`
       <h1>Opps !</h1>
       <p>The page you are looking for is does not exist</p>
       <a href="/"> Back to Home</a>
    `)
})

server.listen(5000)