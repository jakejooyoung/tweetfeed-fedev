import React from "react";
import {AlignMiddle} from "./NopainUI.jsx"

export default class Menu extends React.Component {
  	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.state = {
		  isOpen: false,
		  didMount: false
		};
	}
	componentDidMount(){
		// this.setState((prevState, props) => ({ didMount: true }));
	}

	toggleMenu(){
    	this.setState((prevState, props) => ({ isOpen: !prevState.isOpen }));
	}

    render() {
    	let w=this.props.width+"px";
        return (
        	<div className="menuContainer" style={{width: w}}>
    			{this.renderMenuPlaceholder()}
    			{this.renderMenu()}
        		{
        			this.state.isOpen ?
	        			<div className="menuOverlay" onClick={this.toggleMenu}/>:
	        			null
        		}
			</div>
 	    );
  	}

	renderMenuPlaceholder(){
		// let transition=this.state.didMount?"show":"hide";
		let tgl=["menuPlaceholder",this.state.isOpen?"hide":"show"].join(" ");
		return (
			<AlignMiddle className={tgl} padding="0 30px">
    			<div className="welcomeText"> Did you want this domain? </div>
    			<h1 style={{"marginBottom":"100px"}}> nrllace.com </h1>
			    <form className="inquiry" method="POST" action="/signin" data-autosubmit>
			        <input name="offer" placeholder="Price you want" onChange={this.validateCurrencyInput}></input>
			        <input type="text" name="email" placeholder="Your email"></input>
			    </form>
    			<button role="button" onClick={this.openForm}>
    				Submit Interest
	   			</button>
        		<div role="button" style={{"marginTop": "50px"}} className="hyperlink" onClick={this.toggleMenu}>
	   				See more domains <span>&#8594;</span>
	   			</div>
	   		</AlignMiddle>
		)
	}

	renderMenu(){
		let posProp=(this.props.menuOnRight?"right":"left");
    	const headerHeightOffset={
		    "height": "calc(100% - "+this.props.fixedHeight+"px)",
		    "bottom":this.props.fixedTop?"0":"initial",
		    "top":this.props.fixedTop?"initial":"0",
		    [ posProp ] : this.state.isOpen?0:"-"+this.props.width+"px"
    	}
		return (
    		<div className={this.state.isOpen?"menu selected":"menu unselected"} style={headerHeightOffset}>		
				{this.props.children}	
    		</div>
		)
	}

	validateCurrencyInput(event){
		let val=event.target.value;
		let regex = /(?=.)^\$?(([1-9][0-9]{0,8}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/;

		if(!val.match(regex)) {
			event.preventDefault();
			// Prevent writing invalid value
			if ( val.length==1 || val.charAt(val.length-1)!=="." || val.substring(0,val.length-1).includes(".") ){ 
				event.target.value=val.substring(0, val.length-1);
			} 
		} else {
			// Append $ sign to value if none
			event.target.value=(val.charAt(0)!=="$")?"$"+val:val;
		}
	}
}	
Menu.defaultProps={
	buttonName:"Menu"
}