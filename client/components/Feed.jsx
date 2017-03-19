/*
    ./client/components/App.jsx
*/
import React from 'react';

export class Post extends React.Component {
	render(){
		return (
			<div className="Avatar" style={{textAlign: 'center'}}>
			    <h1> Hi hey </h1>
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
    		<div> 
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
