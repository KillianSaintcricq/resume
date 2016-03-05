import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App/App.jsx';
import SelectableSkills from './containers/SelectableSkills/SelectableSkills.jsx';
import About from './containers/About/About.jsx';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import './styles/global.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={About} />
                <Route path="showcase" component={SelectableSkills} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
