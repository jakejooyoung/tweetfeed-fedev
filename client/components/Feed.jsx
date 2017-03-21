/*
    ./client/components/App.jsx
*/
import React from 'react';
// var json = require("json-loader!localdb/mbit-domains.json");
// var json = require(path.join(__dirname, "../localdb/mbit-domains.json"));
import Domains from 'Db/domains.json'
const NpUI = {
  Button: function Button(props) {
    return (
    	<button className={"btn "+props.action}> 
	    	Post
	    </button>
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

export class Feed extends React.Component {
	renderTitle(){ 
		return <NpUI.Title user="Jake"/>
	}
	renderPosts(){
		const feed=['fdf','fdfd','shihi'];
		return (
			<Repeat className="feed" numTimes={10}>
	   		   	{(index) => <Post key={index} content={feed[index]} />}
		    </Repeat>
   		)
	}
	render() {
    	return (
    		<div id="feed-container">	
				{this.renderTitle()}
				{this.renderPosts()}
				{Domains.DomainList.Domain[9]._Name}
			</div>
		);
 	}
}
export class Repeat extends React.Component {
	render(){
		let items = [];
		for (let i = 0; i < this.props.numTimes; i++) {
			items.push(this.props.children(i));
		}
		return <div className={this.props.className}>{items}</div>;
	}
}
export class Post extends React.Component {
	renderButton(){
		return <NpUI.Button action="yes"/>
	}
	render(){
		return (
			<div className="post">
				<h4>{this.props.reactKey} </h4>
				<p> {this.props.content} </p>
			    {this.renderButton()}
			</div>
		);
	}
}
const user = {
	firstName: 'Jake',
	lastName: 'Kim'
}
function formatWelcomeText(user) {
  	return user+ "'s Activities";
}











