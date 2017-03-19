/*
    ./client/components/App.jsx
*/
import React from 'react';

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function formatWelcomeText(user) {
  return 'Welcome, ' + user.firstName + ' ' + user.lastName;
}

export class Feed extends React.Component {
  render() {
    return (	
	    <div style={{textAlign: 'center'}}>
		    <h1>
		    	{formatWelcomeText(user)}
		    </h1>
		    <p> This is scss testing </p>
		</div>
	);
  }
}






