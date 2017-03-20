/*
    ./client/components/App.jsx
*/
import React from 'react';

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

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}
const posts = ['finish doc', 'submit pr', 'nag dan to review'];
export class Post extends React.Component {
	renderButton(){
		return <NpUI.Button action="yes"/>
	}
	render(){
		return (
			<div className="post">
			    <h4> {this.props.title} </h4>
			    <p> {this.props.text} </p>
			    {this.renderButton()}
			</div>
		);
	}
}
export class Repeat extends React.Component {
	render(){
		  let items = ['finish doc', 'submit pr', 'nag dan to review'];
		  for (let i = 0; i < this.props.numTimes; i++) {
		    items.push(this.props.children(i));
		  }
		  return <div>{items}</div>;
	}
}
export class Feed extends React.Component {
	renderTitle(props){ 
		return <NpUI.Title user="Jake"/>
	}
	renderPost(props){
		return <Post key="{index}" title="{props.title}" text="{props.text}"/>
	}
	renderPosts(props){
		return (
			<Repeat numTimes={10}>
      	{(index) => <div key={index}>This is item {index} in the list</div>}
      	{(index) => {this.renderPost(index)}}
	    </Repeat>
    )
	}
	render() {
    	return (
    		<div id="feed-container">	
				{this.renderTitle()}

    		<div className="feed"> 
	   			{this.renderPosts()}
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
  	return user+ "'s Activities";
}











