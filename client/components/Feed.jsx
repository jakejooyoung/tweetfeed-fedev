/*
    ./client/components/App.jsx
*/
import React from "react";
// var json = require("json-loader!localdb/mbit-domains.json");
// var json = require(path.join(__dirname, "../localdb/mbit-domains.json"));
import Domains from "Db/domains.json"
import CategorizedList from "./CategorizedList.jsx"
const user = {
	firstName: "Jake",
	lastName: "Kim"
}
const NpUI = {
  Button: function Button(props) {
    return (
    	<button className={"btn "+props.action}> 
	    	Post
	    </button>
		);
  },
  Blip: function Blip(props){
		return (
			<div className="blip"><p> {props.content} </p></div>
		);
  },
  Title: function Title(props) {
  	return (
  		<div className="np-title np-border">
		    <p> {formatWelcomeText(props.user)} </p>
			</div>
		);
  }
}
function formatWelcomeText(user) {
  	// return user+ "\"s Activities";
  	return "Available Domains";
}

export default class Feed extends React.Component {
	render() {
    	return (
    	<div id="feed-container">	
				{this.renderTitle()}
				{this.renderCategorizedList()}
			</div>
		);
 	}
	renderTitle(){ 
		return <NpUI.Title user="Jake"/>
	}
	renderCallToAction(){
		var actionType="inquiry"; // sign-up / sign in / buy / inquire
		return <CallToAction actionType={actionType}/>
	}
	renderCategorizedList(){
		return <CategorizedList wrapperType="post"/>
	}
	renderPosts(){
		return <Posts wrapperType="post"/>
	}
}
Feed.defaultProps = {
	
};
export class Repeat extends React.Component {
	render(){
		let innerDivs = [];
		for (let i = 0; i < this.props.numTimes; i++) { innerDivs.push(this.props.children(i)); }
		return <div className={this.props.className}>{innerDivs}</div>;
	}
}











