/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import './css/normalize.css';
import './css/skeleton.css';
import './css/app.scss';
const app = <App />;

ReactDOM.render(app, document.getElementById('app-container'));
