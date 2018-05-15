import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { rootReducer as reducers } from './reducers';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
