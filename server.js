var bodyParser = require('body-parser');
var express = require('express');
const app = express();
var morgan = require('morgan');
var http = require('http');
var cors = require('cors');

const PORT = 3002;

// CORS enabled
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// logging with morgan
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Hello visitor!');
});

/*
app.get('/', function (req, res) {
    return res.status(200).json({
        success: true,
        message: 'Hello visitor!'
    });
});
*/

http.createServer(app).listen(PORT, function () {
    console.log('Server listening on port: ' + PORT);
});