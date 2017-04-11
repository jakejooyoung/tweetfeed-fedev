/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu.jsx";
import Responsive from "./Responsive.jsx";
import CategorizedList from "./CategorizedList.jsx"
export class Fixed extends React.Component {
  	constructor(props) {
		super(props);
	}
  	render(){
  		const fixed={
			"height": this.props.height,
			"position": "fixed",
			"display": "table",
			"zIndex": "10",
			"width": "inherit",
			"background":"#fbfbfb"
	    }
	    const bottom={ "bottom": 0 }
	    const top={ "top":0 }
	    const tablecell={
	    	"display": "table-cell",
	    	"width": "100%",
	    	"height": "100%",
	    	"verticalAlign":"middle"
	    }
	    return (
	    	<div style={Object.assign(fixed,this.props.top?top:bottom)}>
	    		<div style={tablecell}>
	    			{this.props.children}
	    		</div>
	    	</div>
	    )
	}
}
export default class App extends React.Component {ㅊ
	renderCategorizedList(){
		return <CategorizedList wrapperType="post"/>
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
		const sideStyle = {
		  "order":(isMenuOnRightSide?1:0),
		  "minWidth":menuWidth,
		};
		const domainParking={
			buttonName:"Inquire"
		}
		return (
			<div className="side" style={sideStyle}>
				<Menu 
					fixedTop={false}
					fixedHeight={80}
					width={sideStyle.minWidth} 
					buttonName={domainParking.buttonName} 
					isMenuOnRightSide={isMenuOnRightSide} 
					isCollapsed> 
					<CategorizedList wrapperType="post">
						<Fixed height={80} top={false}>Hello</Fixed>
					</CategorizedList>
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
