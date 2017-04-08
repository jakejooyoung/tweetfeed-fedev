import React from "react";

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
    render() {
    	var menuStyle={
    		"width":this.props.width
    	}
    	var overlay=null;
	    if (this.state.isOpen) {
	      	overlay=<div className="menuOverlay" onClick={this.handleClick}/>;
	    } else {
	    	overlay=null
	    }
        return (
        	<div className="menuContainer" style={menuStyle}>
        		<div className="menuPlaceholder">
        			<h3> Yes! This domain is available for purchase. </h3>
	        		<button onClick={this.handleClick}>
		   				{this.props.buttonName} 
		   			</button>
        		</div>
        		<div className={this.state.isOpen?"menu selected":"menu unselected"}>		
					{this.props.children}
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