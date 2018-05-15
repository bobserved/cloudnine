import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './routes';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Routes />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
