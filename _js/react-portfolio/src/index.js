import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import registerServiceWorker from './registerServiceWorker';*/
const appContainer = document.getElementById('root');

if ( appContainer ) {
  ReactDOM.render(<App />, appContainer);
  /*registerServiceWorker();*/
}
