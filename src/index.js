import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import { AmazonReducer } from './reducers/AmazonReducer';
import {ViewReducer} from './reducers/ViewReducer';
const reducer=combineReducers({
    amazon:AmazonReducer,
    view:ViewReducer,
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store=createStore(reducer,enhancer);
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,
document.getElementById("root"));