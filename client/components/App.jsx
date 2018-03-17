/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Responsive from "./Responsive.jsx";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  hashtag: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({hashtag: event.target.value});
	}
	render() {
		const mainStyle = {};
		return (
			<div className="app">
				<div className="main" style={mainStyle}>
					<h1> A Simple TweetFeed Mockup</h1>
					<p className="description"> 
						This simple Twitter feed mockup was created using <b>node</b>, <b>express</b>, <b>react</b>, <b>scss</b>, and <b> webpack</b>. 
					<br/>
						Check out the API server code <a href="https://github.com/jknpg/tweetfeed-api">here</a>,
						and the frontend development server code <a href="https://github.com/jknpg/tweetfeed-fedev">here</a>.
					</p>
					<div>
						<input 
							type="text" 
							value={this.state.hashtag} 
							className="searchField"
							onChange={ this.handleChange } 
							placeholder="Try Searching for a Tweet!" />
						<Responsive hashtag={this.state.hashtag}/>
					</div>
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

