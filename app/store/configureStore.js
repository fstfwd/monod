/* eslint global-require: 0 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules/reducer';

const middlewares = [thunk];

if ('production' !== process.env.NODE_ENV) {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
