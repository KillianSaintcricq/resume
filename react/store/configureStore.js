import { createStore, applyMiddleware } from 'redux';
import resumeApp from '../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistory } from 'redux-simple-router';

export default function configureStore(initialState) {

    const reduxRouterMiddleware = syncHistory(browserHistory);
    const loggerMiddleware = createLogger({
        predicate: (getState, action) => process.env.NODE_ENV !== 'development'
    });
    const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunkMiddleware, loggerMiddleware)(createStore);
    const store = createStoreWithMiddleware(resumeApp, initialState);
    reduxRouterMiddleware.listenForReplays(store);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;

}
