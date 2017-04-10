import React from "react";
export class AlignMiddle extends React.Component {
  	constructor(props) {
		super(props);
	}
  	render(){
  		const table={
	      "display": "table",
	      "width": "100%",
	      "height": "100%"
	    }
	    const tablecell={
	    	"display": "table-cell",
	    	"width": "100%",
	    	"height": "100%",
	    	"verticalAlign":"middle"
	    }
	  	return (
	  		<div className={this.props.className}>
	  			<div style={Object.assign(table,this.props.style)}>
	  				<div style={tablecell}>
	  					{this.props.children}
	  				</div>
	  			</div>
	  		</div>
	  	)
	}
}
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
export default class Menu extends React.Component {
  	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
		  isOpen: false
		};
	}
	handleClick(){
	    console.log(this.state.isOpen);
    	this.setState((prevState, props) => ({
		  isOpen: !prevState.isOpen
		}));
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
    render() {
    	const fixedHeight=this.props.fixedHeight+"px";
    	const fixedTop=this.props.fixedTop;
    	var menuContainer={
    		"width":this.props.width,
    	}
    	var menu={
		    "height": "calc(100% - "+fixedHeight+")",
		    "bottom":fixedTop?"0":"initial",
		    "top":!fixedTop?"0":"initial",
    	}

    	var overlay=(this.state.isOpen)?<div className="menuOverlay" onClick={this.handleClick}/>:null;
        return (
        	<div className="menuContainer" style={menuContainer}>
    			<AlignMiddle className="menuPlaceholder">
        			<h4> This domain is available for purchase. </h4>
        			<h1> nrllace.com </h1>
    			    <form className="inquiry" method="POST" action="/signin" data-autosubmit>
				        <input name="offer" placeholder="Enter Your Offer" onChange={this.validateCurrencyInput}></input>
				        <input type="text" name="email" placeholder="Enter Your Email"></input>
				    </form>
        			<button role="button" onClick={this.openForm}>
        				Submit this Offer
		   			</button>
	        		<div role="button" className="seeMore" onClick={this.handleClick}>
		   				See more domains <span>&#8594;</span>
		   			</div>
		   		</AlignMiddle>
        		<div className={this.state.isOpen?"menu selected":"menu unselected"} style={menu}>		
					{this.props.children}
			  		<Fixed top={fixedTop} height={fixedHeight}> 
			  			Available Domains 
			  		</Fixed>	
        		</div>
        		{overlay}
			</div>
 	    );
  	}
}
Menu.defaultProps={
	buttonName:"Menu"
}

// Menu.defaultProps = {
//   	isCollapsed: true
// };
// Menu.PropTypes ={
// 	isCollapsed:React.PropTypes.bool.isRequired
// }
// const Demo = React.createClass({
//   getInitialState() {
//     return {
//       items: [{key: 'a', size: 10}, {key: 'b', size: 20}, {key: 'c', size: 30}],
//     };
//   },
//   componentDidMount() {
//     this.setState({
//       items: [{key: 'a', size: 10}, {key: 'b', size: 20}], // remove c.
//     });
//   },
//   willLeave() {
//     // triggered when c's gone. Keeping c until its width/height reach 0.
//     return {width: spring(0), height: spring(0)};
//   },
//   render() {
//     return (
//       <TransitionMotion
//         willLeave={this.willLeave}
//         styles={this.state.items.map(item => ({
//           key: item.key,
//           style: {width: item.size, height: item.size},
//         }))}>
//         {interpolatedStyles =>
//           // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
//           <div>
//             {interpolatedStyles.map(config => {
//               return <div key={config.key} style={{...config.style, border: '1px solid'}} />
//             })}
//           </div>
//         }
//       </TransitionMotion>
//     );
//   },
// });