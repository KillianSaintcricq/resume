import { createStore, applyMiddleware } from 'redux';
import resumeApp from '../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {

    const loggerMiddleware = createLogger({
        predicate: (getState, action) => process.env.NODE_ENV === 'development'
    });
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
    const store = createStoreWithMiddleware(resumeApp, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;

}
