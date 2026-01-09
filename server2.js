import { createServer } from 'http';
const port = process.env.PORT
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
]


//LOGGER MIDDLEWARE
const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
}

//JSON MIDDLEWARE
const jsonMiddleWare = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next()
}

//route handler for /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end()
}


//route handler for /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3]
    const user = users.find((item) => item.id === parseInt(id))
    if (user) {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'User does not exist' }));
    }
    res.end()
}


//not found handler
const notFoundHandler = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end()
}



//Route handler for a post /api/users
const createUserHandler = (req, res) => {
    let body = '';
    //listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser)
        res.statusCode = 201;
        res.write((JSON.stringify(newUser)));
        res.end()
    })
}


const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleWare(req, res, () => {
            if (req.url === '/api/users' && req.method == 'GET') {
                getUsersHandler(req, res)
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByIdHandler(req, res)
            } else if (req.url === '/api/users' && req.method == 'POST') {
                createUserHandler(req, res)
            }
            else {
                notFoundHandler(req, res)
            }
        })
    })
});
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
