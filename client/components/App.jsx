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
					<h1> Barebone TweetFeed </h1>
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

