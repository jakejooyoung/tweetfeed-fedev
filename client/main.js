/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


import './components/app.scss';

const app = <App />;

ReactDOM.render(app, document.getElementById('app-container'));
