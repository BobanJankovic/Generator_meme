import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { fetchMemes, newMemes } from './actions/index';


const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(()=> console.log('store', store.getState()));
store.dispatch(fetchMemes());
//Primer
//store.dispatch(newMemes({blod:"DDD"}));

ReactDOM.render(
< Provider store = { store } >
<App />
</ Provider>
, document.getElementById('root'));

