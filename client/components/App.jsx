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
	render() {
		return (
			<div className="app">
				{this.renderMain()}
				{this.renderSide()}
			</div>
		);
	}
	renderMain(){
		const mainStyle = {"order":(this.props.menuOnRight?0:1)};
		return (
			<div className="main" style={mainStyle}>
				<Responsive/>
			</div>
		)
	}
	renderSide(){
		const sideStyle = { 
			"order":(this.props.menuOnRight?1:0), 
			"minWidth":this.props.menuWidth 
		};
		return (
			<div className="side" style={sideStyle}>
				<Menu 
					fixedTop={this.props.fixedTop}
					fixedHeight={80}
					width={sideStyle.minWidth} 
					menuOnRight={this.props.menuOnRight} 
					isCollapsed> 
					<CategorizedList fixedTop={this.props.fixedTop} wrapperType="post"/>
		  		</Menu>
			</div>
		)
	}
}
App.defaultProps={
	menuOnRight:false,
	menuWidth:400,
	fixedTop:true
}


