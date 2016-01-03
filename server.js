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
    res.sendFile(__dirname + '/front/index.html')
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
            "title": "Versioning tools (Git)",
            "votes": 6,
            "tags": [
                "software engineering"
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
        },
        {
            "id": 9,
            "title": "Modeling (UML)",
            "votes": 2,
            "tags": [
                "software engineering"
            ]
        },
        {
            "id": 10,
            "title": "Agile Methodologies (Scrum)",
            "votes": 12,
            "tags": [
                "project management"
            ]
        },
        {
            "id": 11,
            "title": "AngularJS",
            "votes": 9,
            "tags": [
                "front-end",
                "frameworks"
            ]
        },
        {
            "id": 12,
            "title": "HTML5 / CSS3",
            "votes": 15,
            "tags": [
                "front-end"
            ]
        },
        {
            "id": 13,
            "title": "PHP",
            "votes": 6,
            "tags": [
                "back-end",
                "programming languages"
            ]
        },
        {
            "id": 14,
            "title": "MongoDB",
            "votes": 13,
            "tags": [
                "databases"
            ]
        },
        {
            "id": 15,
            "title": "MySQL",
            "votes": 1,
            "tags": [
                "databases"
            ]
        },
        {
            "id": 16,
            "title": "jQuery",
            "votes": 3,
            "tags": [
                "front-end"
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
        {id: 7, title: 'programming languages'},
        {id: 8, title: 'tests'},
        {id: 9, title: 'databases'}
    ]);
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
