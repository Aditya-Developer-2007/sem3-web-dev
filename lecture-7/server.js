const http=require('http');

const users=[
    {name:'aditya',age:22},
    {name:'Sanjay',age:23},
    {name:'Sambit',age:24}
]

const server=http.createServer((req,res)=>{
        if(req.url==='/'){
            res.writeHead(200,{'content-type':'text/html'});
            res.write('<h1>Home Page</h1>');
            res.end('Welcome to our home page');
        }
        else if(req.url==='/about'){
            res.writeHead(400,{'content-type':'text/html'});
            res.write('<h1>About Page</h1>');
            res.end('Here is your about page');
        }
        else if(req.url==='/users'){
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify(users));
        }

        else{
            res.writeHead(404,{'content-type':'text/html'});
            res.write('<h1>wrong call</h1>');
            res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `);
        }
    });

server.listen(3000,()=>{
    console.log('listening on port 3000...');
}); 