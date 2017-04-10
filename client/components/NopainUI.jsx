import React from "react";

const NpUI = {
  Button: function Button(props) {
    return (
    	<button className={"btn "+props.action}> 
	    	Post
	    </button>
		);
  },
  Blip: function Blip(props){
		return (
			<div className="blip"><p> {props.content} </p></div>
		);
  },
  Title: function Title(props) {
  	return (
  		<div className="np-title np-border">
  			<div className="np-inner">
  				<p> Available Domains</p>
  			</div>
		</div> 
	);
  }
}

export default class NopainUI extends React.Component {
  	render(){
  		
  	}
}
