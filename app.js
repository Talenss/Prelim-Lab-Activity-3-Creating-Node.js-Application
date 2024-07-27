const http = require('http');
const url = require('url');

const getRoot = require('./root');
const getAbout = require('./about');
const getContact = require('./contact');

const port = 4000;
const name = 'John Smith';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    let content;
    res.setHeader('Content-Type', 'text/html');

    if (path === '/') {
        content = `<html>
                    <body>
                      
                        <p>${getRoot(name)}</p>
                    </body>
                   </html>`;
        res.statusCode = 200;
    } else if (path === '/about') {
        content = `<html>
                    <body>
               
                        <p>${getAbout(name)}</p>
                    </body>
                   </html>`;
        res.statusCode = 200;
    } else if (path === '/contact') {
        content = `<html>
                    <body>
               
                        <p>${getContact(name)}</p>
                    </body>
                   </html>`;
        res.statusCode = 200;
    } else if (path === '/gallery') {
        content = `<html>
                    <body>
                        <h1>This is the gallery page</h1>
                    </body>
                   </html>`;
        res.statusCode = 200;
    } else {
        content = `<html>
                    <body>
                    
                        <p>Invalid Request</p>
                    </body>
                   </html>`;
        res.statusCode = 404;
    }

    res.end(content);
});

server.listen(port, () => {
    console.log('Listening at port: ' + port);
});
