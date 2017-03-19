/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Feed } from './components/Feed.jsx';

import './components/app.scss';

const app = <App />;
const feed= <Feed />;

ReactDOM.render(app, document.getElementById('app'));
ReactDOM.render(feed, document.getElementById('feed'));