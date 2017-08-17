import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'

let a=createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={a}>
        <App />  
    </Provider>
, document.getElementById('root'));


registerServiceWorker();
