import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { SaloonContainer } from './containers/saloon-container';

ReactDOM.render(
  <div>
    <SaloonContainer />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
