/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Responsive from "./Responsive.jsx";

var hashtag="ufc";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	nextPath(path) {
		this.props.history.push(path);
	}
	render() {
		const mainStyle = {"border":"1px solid grey"};
		return (
			<div className="app">
				<div className="main" style={mainStyle}>
					<h1> Barebone TweetFeed </h1>
					<Responsive hashtag={hashtag}/>
				</div>
			</div>
		);
	}
	renderTweetSearch() {
	    return (
	      <button>
	        change path 
	      </button>
	    );
  	}
}

