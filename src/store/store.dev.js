import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const middlewares = [ReduxThunk, sagaMiddleware];
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ];
  const composeEnhancers = composeWithDevTools({
    // other compose enhancers if any
    // Specify here other options if needed
  });
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
