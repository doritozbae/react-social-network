import { applyMiddleware, combineReducers,compose, createStore } from "redux";
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import usersReducer from "./usersReducer.js";
import authReducer from "./authReduer.js";
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'
// import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

window.__store__ = store;

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// window.store = store;

export default store;