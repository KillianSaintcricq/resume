import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Home from './views/Home/Home.jsx'
import About from './views/About/About.jsx'

ReactDOM.render((
    <Router>
        <Route path="/" component={Home}>
            <Route path="/about" component={About} />
        </Route>
    </Router>
), document.body)