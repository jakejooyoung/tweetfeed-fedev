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
			<div className="post" style={{textAlign: 'center'}}>
			    <p> First Post </p>
			    {this.renderButton()}
			</div>
  		);
	}
}
export class Feed extends React.Component {
	renderPost(){
		return <Post/>
	}
	render() {
	  	const user = {
			firstName: 'Harper',
			lastName: 'Perez'
		}
    	return (	
    		<div className="feed"> 
	    		{this.renderPost()}
			    <div style={{textAlign: 'center'}}>
				    <h1>
				    	{formatWelcomeText(user)}
				    </h1>
				    <p> This is scss testing </p>
				</div>
			</div>
		);
 	}
}

function formatWelcomeText(user) {
  	return 'Welcome, ' + user.firstName + ' ' + user.lastName;
}
