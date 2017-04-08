/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Feed from "./Feed.jsx";
import Menu from "./Menu.jsx";
import Responsive from "./Responsive.jsx";

// import Landing from "./Landing.jsx";

export default class App extends React.Component {
	renderMain(isMenuOnRightSide){
		const mainStyle = {
		  "order":(isMenuOnRightSide?0:1)
		};
		return (
			<div className="main" style={mainStyle}>
				<br/>
				<Responsive/>
			</div>
		)
	}
	renderSide(isMenuOnRightSide,menuWidth){
		const sideStyle = {
		  "order":(isMenuOnRightSide?1:0),
		  "minWidth":menuWidth,
		};
		const domainParking={
			buttonName:"More Premium Domains"
		}
		return (
			<div className="side" style={sideStyle}>
				<Menu buttonName={domainParking.buttonName} width={sideStyle.minWidth} isMenuOnRightSide={isMenuOnRightSide} isCollapsed> 
			  	<Feed type="domains"/>
			  </Menu>
			</div>
		)
	}
	render() {
		var isMenuOnRightSide=false;
		var menuWidth=400;
		return (
			<div className="app">
				{this.renderMain(isMenuOnRightSide)}
				{this.renderSide(isMenuOnRightSide, menuWidth)}
			</div>
		);
	}
}
