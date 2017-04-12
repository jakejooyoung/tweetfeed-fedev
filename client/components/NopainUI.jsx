import React from "react";

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
	    const tablecell={
	    	"display": "table-cell",
	    	"width": "100%",
	    	"height": "100%",
	    	"verticalAlign":"middle",
	    	"padding":"18px"
	    }
	    const bottom={ "borderTop":"1px solid lightgrey","bottom": 0 };
	    const top={ "borderBottom":"1px solid lightgrey","top":0 };
	    return (
	    	<div style={Object.assign(fixed,this.props.fixedTop?top:bottom)}>
	    		<div style={tablecell}>
	    			{this.props.children}
	    		</div>
	    	</div>
	    )
	}
}
export class Repeat extends React.Component {
  constructor(props) {
    super(props);
  } 
  render(){
    var innerDivs = [];
    for (let i = 0; i < this.props.numTimes; i++) { innerDivs.push(this.props.children(i)); }
    return <div className={this.props.className}>{innerDivs}</div>;
  }
}
export class Blip extends React.Component {
  constructor(props) {
    super(props);
  } 
  render(){
    return (
      <div 
        role="button" 
        className={[this.props.className,"blip"].join(" ")} 
        onClick={this.props.handleSelection}
      > <p> {this.props.content} </p> </div>
    )
  }
}