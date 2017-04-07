import React from "react";
import Drawer from 'react-motion-drawer';

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
	    console.log('The link was clicked.');
    	this.setState((prevState, props) => ({
		  isOpen: !prevState.isOpen
		}));
	}
    render() {
        return (
        	<div>
        		<div className="drawerPlaceholder">
	        		<button onClick={this.handleClick}>
		   				{this.props.buttonName} 
		   			</button>
        		</div>
   				<Drawer 
					className="drawer" 
					handleWidth={0}
					width={this.props.width}
					right={this.props.isMenuOnRightSide} 
					open={this.state.isOpen} 
					onChange={open => this.setState({ isOpen: open })}>
					{this.props.children}
				</Drawer>
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