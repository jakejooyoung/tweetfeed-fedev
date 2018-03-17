/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Responsive from "./Responsive.jsx";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const mainStyle = {"border":"1px solid grey"};
		return (
			<div className="app">
				<div className="main" style={mainStyle}>
					<h1> Barebone TweetFeed </h1>
					<Responsive/>
				</div>
			</div>
		);
	}
}


