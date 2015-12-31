var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

var app = new (require('express'))();
var port = 3001;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/app/index.html')
});

app.get("/api/skills", function (req, res) {
    res.json([
        {
            "id": 1,
            "title": "Javascript",
            "text": "I did some Javascript yep...",
            "votes": 9,
            "tags": [
                "javascript",
                "front-end"
            ]
        },
        {
            "id": 2,
            "title": "React",
            "text": "React is used right here!",
            "votes": 10,
            "tags": [
                "javascript",
                "react",
                "front-end"
            ]
        },
        {
            "id": 3,
            "title": "Java",
            "text": "I used Java a lot in Capgemini and at school.",
            "votes": 2,
            "tags": [
                "java",
                "back-end"
            ]
        }
    ]);
});

app.get('/api/tags', function (req, res) {
    res.json([
        {id: 1, title: 'react'},
        {id: 2, title: 'angular'}
    ]);
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
