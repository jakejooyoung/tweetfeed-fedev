import React from "react";
import FaBookmarkO from 'react-icons/fa/bookmark-o';
import FaShareSquareO from 'react-icons/fa/share-square-o';
import FaEnvelopeO from 'react-icons/fa/envelope-o';
import FaHeartO from 'react-icons/fa/heart-o';
import FaClose from 'react-icons/fa/close';

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

const colors={
  blue:"#4763ff",
  subblue:"#1DA1F2",
  red:"tomato",
  grey:"grey"
}
export class ActionIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
    getChildContext() {
      let hovered=this.state.hovered;
        let disabled=this.props.disabled;
      let size=this.props.size;
        return {
            reactIconBase: {
                "color": disabled?"lightgrey":(hovered?colors.blue:colors.grey),
                "size": hovered?size+2:size
            }
        }
    }
    onMouseOver() {
        this.setState({ hovered:true });
    }
    onMouseOut() {
      this.setState({ hovered:false });
    }
    renderIcons(){
      console.log(this.props.icon);
    let icon;
      switch (this.props.icon) {
      case "bookmark":
        icon=<FaBookmarkO/>
        break;
      case "close":
        icon=<FaClose/>;
        break;
      case "email":
        icon=<FaEnvelopeO/>;
        break;
        case "share":
        icon=<FaShareSquareO/>;
        break;
      case "heart":
        icon=<FaHeartO/>;
        break;  
        default:
          //Statements executed when none of the values match the value of the expression
          break;
    }
        return icon     
    }
    render() {
      const sizebumpOffset=(this.props.sizebump/2).toString()+"px"
      let style={ 
            "margin":this.state.hovered?0:sizebumpOffset, 
            "zIndex":1000 ,
            "float":this.props.float
        };
      let disabled=this.props.disabled;
        return (
            <span 
                role={!disabled&&"button"}
          onMouseOver={!disabled&&this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={!disabled&&this.props.onClick}
                style={style}
            >{this.renderIcons()}</span>
        )
    }
}
ActionIcons.childContextTypes = {
    reactIconBase: React.PropTypes.object
};
ActionIcons.defaultProps={
  size:24,
  sizebump:2,
    float:"right",
    disabled:true
}