/*
    ./client/components/App.jsx
*/
import React from 'react';
import { Feed } from './Feed.jsx';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	renderFeed() {
		return <Feed/>
	}
	render() {
		return (
			<div style={{textAlign: 'center'}}>
		    <h1>Hello World</h1>
		    {this.renderFeed()}
			</div>
		);
	}
}


