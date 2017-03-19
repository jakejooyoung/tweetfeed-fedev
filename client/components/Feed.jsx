/*
    ./client/components/App.jsx
*/
import React from 'react';

export class Button extends React.Component {
	render(){
		return (
			<button className="btn yes"> Post </button>
  		);
	}
}
export class Post extends React.Component {
	renderButton(){
		return <Button/>
	}
	render(){
		return (
			<div className="post">
			    <p> First Post </p>
			    {this.renderButton()}
			</div>
  		);
	}
}
export class Feed extends React.Component {
	renderTitle(){
		return (
    		<div className="np-title np-border">
			    <p> {formatWelcomeText(user)} </p>
    		</div>
		)
	}
	renderPost(){
		return <Post/>
	}
	render() {
    	return (
    		<div>	
    			{this.renderTitle()}
	    		<div className="feed"> 
					{this.renderPost()}
					{this.renderPost()}
		    		{this.renderPost()}
		    		{this.renderPost()}
					{this.renderPost()}
					{this.renderPost()}
		    		{this.renderPost()}
		    		{this.renderPost()}
				</div>
			</div>
		);
 	}
}

const user = {
	firstName: 'Jake',
	lastName: 'Kim'
}
function formatWelcomeText(user) {
  	return user.firstName + " " + user.lastName + "'s Activities";
}











