const http = require('http');
const fs = require('fs')
const port = 5000;
const app = http.createServer((req, res) => {

    if (req.url  == '/'){
         const content = fs.readFileSync('./views/home/index.html');
         res.writeHead(200, {
            'Content-Type': 'text/html'
         })
         res.write(content)
    }else if(req.url == '/styles/site.css'){
        const content = fs.readFileSync('./styles/site.css');
        res.writeHead(200, {
           'Content-Type': 'text/css'
        })
        res.write(content)
    }else if(req.url == '/cats/add-cat'){
        const content = fs.readFileSync('./views/addCat.html');
        res.writeHead(200, {
           'Content-Type': 'text/html'
        })
        res.write(content)
    }else if(req.url == '/cats/add-breed'){
        const content = fs.readFileSync('./views/addBreed.html');
        res.writeHead(200, {
           'Content-Type': 'text/html'
        })
        res.write(content)
    }else if(req.url == '/cats-edit/:id'){
        const content = fs.readFileSync('./views/editCat.html');
        res.writeHead(200, {
           'Content-Type': 'text/html'
        })
        res.write(content)
    }
    res.end();

})

app.listen(port)
console.log('App is listening on port 5000....')


/*else {
        res.statusCode = 404;
        res.write('Invalid path. Try again!')
        return;
    }*/