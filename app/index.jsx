import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Template from './views/Template/Template.jsx';

render((
    <Router history={createBrowserHistory({queryKey: false})}>
        <Route path="/" component={Template}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.getElementById('resume'));