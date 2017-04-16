/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu.jsx";
import Responsive from "./Responsive.jsx";
import CategorizedList from "./CategorizedList.jsx"

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	renderMain(isMenuOnRightSide){
		const mainStyle = {
		  "order":(isMenuOnRightSide?0:1)
		};
		return (
			<div className="main" style={mainStyle}>
				<Responsive/>
			</div>
		)
	}
	renderSide(isMenuOnRightSide,menuWidth){
		const fixedTop=true;
		const sideStyle = {
		  "order":(isMenuOnRightSide?1:0),
		  "minWidth":menuWidth,
		};
		return (
			<div className="side" style={sideStyle}>
				<Menu 
					fixedTop={fixedTop}
					fixedHeight={80}
					width={sideStyle.minWidth} 
					isMenuOnRightSide={isMenuOnRightSide} 
					isCollapsed> 
					<CategorizedList fixedTop={fixedTop} wrapperType="post"/>
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
