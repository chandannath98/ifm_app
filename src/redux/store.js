import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import visitorReducer from './reducers';

const rootReducer = combineReducers({ visitorReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));