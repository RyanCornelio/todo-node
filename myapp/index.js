const path = require('path');
const express = require('express');
const { json } = require('body-parser');
const app = express();
const port = 3000;


function generateId() {
    return Math.floor(Math.random() * 100).toString();
};

let tasks = [
    {
        id: generateId(),
        name: "Clean"
    },
    {
        id: generateId(),
        name: "Cook food"
    },
    {
        id: generateId(),
        name: "Walk the dog"
    },
    {
        id: generateId(),
        name: "Code"
    },
    {
        id: generateId(),
        name: "Clean window"
    }
    
];
// Client folder
app.use(express.static(path.join(__dirname, 'public')))

// Server
app.listen(port, () => console.log(`App is on port: ${port}!`));


// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


try {
    app.get('/tasks', function (req, res) {
        res.json(artists)
    });
} catch (err) {
    console.log('error')
}

app.use(express.static('public'))

app.post('/task', (req, res) => {
    // We will be coding here
    try {
        const task = {
            id: generateId(),
            name: req.body.name
        };
        tasks.push(task);
        res.json('added')
    } catch {
        console.error();
    }

    // Output the task to the console for debugging
    console.log(task);
    tasks.push(task);

    res.send('Task is added to the database');
});

/* app.put('/', function (req, res) {
    res.send('Got a PUT request at /user')
});

app.delete('/', function (req, res) {
    res.send('Got a DELETE request at /user')
}) */