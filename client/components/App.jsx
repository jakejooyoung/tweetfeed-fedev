/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Feed from "./Feed.jsx";
import Menu from "./Menu.jsx";

export default class App extends React.Component {

	renderFeed() {
		return <Feed type="domains"/>
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
