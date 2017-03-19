/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Feed } from './components/Feed.jsx';

// import style from './components/App.scss'; // or `.scss` if you chose scss
import './components/app.scss';

const app = <App />;
const feed= <Feed />;

ReactDOM.render(app, document.getElementById('app'));
ReactDOM.render(feed, document.getElementById('feed'));