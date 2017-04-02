/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Feed from "./Feed.jsx";
import Menu from "./Menu.jsx";
// import Landing from "./Landing.jsx";

export default class App extends React.Component {
	// renderLanding(){
	// 	return (
	// 		<Landing title="It's the Millibit Era"/>
	// 	)
	// }
	renderMenu(){
		return (
		  <Menu isCollapsed> 
		  	{this.renderFeed()}
		  </Menu>
		);
	}
	renderFeed() {
		return <Feed type="domains"/>
	}
	render() {
		return (
			<div style={{textAlign: 'center'}}>
		    <h1>It's the Millibit Era!</h1>
		    {this.renderMenu()}
			</div>
		);
	}
	// render() {
	// 	return (
	// 		<div style={{textAlign: 'center'}}>
	// 	    <h1>Hello World</h1>
	// 	    {this.renderLanding()}
	// 	    {this.renderMenu()}
	// 		</div>
	// 	);
	// }
}
