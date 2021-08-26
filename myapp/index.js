const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('Hello World!')
});

app.use('/static', express.static('public'))

app.use(express.static('public'))

app.listen(port, () => {
    console.log("Applikationen är igång, välkommen!")
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.put('/', function (req, res) {
    res.send('Got a PUT request at /user')
});

app.delete('/', function (req, res) {
    res.send('Got a DELETE request at /user')
})