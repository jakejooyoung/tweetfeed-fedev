/*
    ./client/components/App.jsx
*/
import React from "react";
// var json = require("json-loader!localdb/mbit-domains.json");
// var json = require(path.join(__dirname, "../localdb/mbit-domains.json"));
import Domains from "Db/domains.json"

const user = {
	firstName: "Jake",
	lastName: "Kim"
}
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
		    <p> {formatWelcomeText(props.user)} </p>
			</div>
		);
  }
}
function formatWelcomeText(user) {
  	// return user+ "\"s Activities";
  	return "Available Domains";
}
var categories= [
	"millibitcoin",
	"millibit",
	"millicoin",
	"bitcoin",
	"mbitcoin",
	"ubitcoin",
	"mbit",
	"bitcent",
	"mbtc",	
	"btc",
	"bit",
	"nrl",
	"hodl",
	"tosh"
];
const domains=Domains.DomainList.Domain;
const domainsByCategory=[];
function parseDomainArr(){
	categories.forEach(function(category){
		domainsByCategory[category]=[];
	});
	domains.map(function(obj){
		var dn={
			Name:obj._Name,
			Category:""
		};
		categories.forEach(function(ctg){
			// Domain has matching category 
			if (dn.Name.includes(ctg)){
				// Domain was not inserted into matching category array
				// or category assigned was less specific than new category	
				// TO-DO: rearrange categories by length.
				if (!dn.Category||dn.Category.length<ctg.length){
					// Previously inserted to byCategory array
					if (dn.Category){
						// Delete from old category array
						var index=domainsByCategory[dn.Category].indexOf(dn);
						domainsByCategory[dn.Category].splice(index,1);
					}
					// In all other cases assign dn.Category and insert to byCategory
					dn.Category=ctg;
					domainsByCategory[ctg].push(dn);
				}
			}
		});
		return dn;
	});
}
// domain names saved as objects in an array
// [[k,{Name:x,Category:y}],[k,{Name:x,Category:y}]]
parseDomainArr();

export default class Feed extends React.Component {
	render() {
    	return (
    		<div id="feed-container">	
				{this.renderTitle()}
				{this.renderPosts()}
			</div>
		);
 	}
	renderTitle(){ 
		return <NpUI.Title user="Jake"/>
	}
	renderPosts(){
		// This is where you set db call to get posts.
		// e.g. get array of domains sorted by domain name.
		let payload=categories;
		// For each received data object, construct post.
		let posts=payload.map(function(obj){
			// Extrapolate data per post.
			let postObj=domainsByCategory[obj];
			// Construct and return array of post for post of current index.
			return (
				<div key={obj} className="post">
					<Repeat className="npUl" numTimes={postObj.length} >
   		   		{(index) => (<NpUI.Blip key={index} content={postObj[index].Name} />)}
	   			</Repeat>
				</div>
			);
		});
		return posts;
	}
}
export class Repeat extends React.Component {
	render(){
		let innerDivs = [];
		for (let i = 0; i < this.props.numTimes; i++) { innerDivs.push(this.props.children(i)); }
		return <div className={this.props.className}>{innerDivs}</div>;
	}
}











