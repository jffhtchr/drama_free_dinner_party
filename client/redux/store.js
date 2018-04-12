import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './index';
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);
