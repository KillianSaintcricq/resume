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
            "votes": 9,
            "tags": [
                "programming languages"
            ]
        },
        {
            "id": 2,
            "title": "React",
            "votes": 10,
            "tags": [
                "front-end",
                "frameworks"
            ]
        },
        {
            "id": 3,
            "title": "Java",
            "votes": 2,
            "tags": [
                "back-end",
                "programming languages"
            ]
        },
        {
            "id": 4,
            "title": "Laravel",
            "votes": 3,
            "tags": [
                "back-end",
                "frameworks"
            ]
        },
        {
            "id": 5,
            "title": "Versionning tools",
            "votes": 6,
            "tags": [
                "software engineering"
            ]
        },
        {
            "id": 6,
            "title": "WebStorm",
            "votes": 6,
            "tags": [
                "ide"
            ]
        },
        {
            "id": 7,
            "title": "Jasmine",
            "votes": 6,
            "tags": [
                "front-end",
                "tests"
            ]
        },
        {
            "id": 8,
            "title": "JUnit",
            "votes": 6,
            "tags": [
                "tests"
            ]
        }
    ]);
});

app.get('/api/tags', function (req, res) {
    res.json([
        {id: 1, title: 'front-end'},
        {id: 2, title: 'back-end'},
        {id: 3, title: 'project management'},
        {id: 4, title: 'software engineering'},
        {id: 5, title: 'frameworks'},
        {id: 6, title: 'ide'},
        {id: 7, title: 'programming languages'},
        {id: 8, title: 'tests'}
    ]);
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
