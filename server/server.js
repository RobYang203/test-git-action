const express = require('express');

const POST = 3000;

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World! <br/> Hello world')
})

console.log('test...' , process.env);

app.listen(POST);