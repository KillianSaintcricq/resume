import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Home from './components/Home/Home.jsx'
import Template from './views/Template/Template.jsx'

ReactDOM.render((
    <Router history={createBrowserHistory({queryKey: false})}>
        <Route path="/" component={Template}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
), document.getElementById('app'));