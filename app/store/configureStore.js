import { createStore } from 'redux';
import resumeApp from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(resumeApp, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
