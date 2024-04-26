import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './Reducers/todosReducers.js';
import { thunk } from 'redux-thunk'; 
import { tabReducer } from './Reducers/tabReducers.js';

const reducer = combineReducers({
    todos: todosReducer,
    currentTab: tabReducer
});

const middleware = [thunk]; // Use thunk as a named export

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
