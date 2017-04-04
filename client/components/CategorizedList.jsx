import React from "react";
// var json = require("json-loader!localdb/mbit-domains.json");
// var json = require(path.join(__dirname, "../localdb/mbit-domains.json"));
import Domains from "Db/domains.json"

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
const domainCategories= [ 
	"millibitcoin", "millibit", "millicoin", 
	"bitcoin", "mbitcoin", "ubitcoin", 
	"mbit", "bitcent", "mbtc", "btc", 
	"bit", "nrl", "hodl", "tosh", "milli"
];
var domains={
	"List":Domains.DomainList.Domain,
	"Categories": domainCategories,
}

export default class CategorizedList extends React.Component {	
  	constructor(props) {
		super(props);
	}

	sortByCategory(){
		// Category names to sort list by.  
		var categories=[];
		// List you'd like to categorize.
		var list=[];
		// This is the array we will be returning. 
		// Arrays of items indexed by category
		var categorized=[];
		var uncategorized=[];

		// This is code specific to domain parking app.
		categories=domains.Categories;
		list=domains.List;

		// Create arrays for each category
		categories.forEach(function(category){
			categorized[category]=[];
		});

		var count=0;
		// New array to fill results with.
		list.map(function(obj){
			var item={ "Name":obj._Name };
			categories.map(function(category){
				// Item name includes string for this category 
				if (item.Name.includes(category)){
					if (!item.hasOwnProperty("Category")){
						// In all other cases assign dn.Category and insert to categorized
						item.Category=category;
						categorized[item.Category].push(item);						
					} else if (item.Category.length<category.length){
						// Delete from old category array
						// If you want list to be more inclusive (e.g. category 'bit' for both 'bitcoin' and 'bittorrent')
						// categorized[category].splice(-1, 1);
						categorized[item.Category].splice(-1, 1);
						// In all other cases assign dn.Category and insert to categorized
						item.Category=category;
						categorized[item.Category].push(item);		
					} 
				}
			});
			if (!item.hasOwnProperty("Category")){
				item.Category="uncategorized"
				uncategorized.push(item);
				console.log(item);
			}
			count++;
			return item;
		});
		//Include unmatched items in a separate category.
		categorized["uncategorized"]=uncategorized;
		return [categorized, count];
	}

	render(){
		// This is where you set db call to get posts.
		// e.g. get array of domains sorted by domain name.
		let data=this.sortByCategory();
		var payload=data[0];
		var count=data[1];
		let categories=Object.keys(payload);
		var wrapperType=this.props.wrapperType;
		// Construct and return array of containers for list of current index.
		var div=categories.map(function(category){
			let i=payload[category].length;
			return (
				<div key={category} className={wrapperType}>
					<Repeat className="npUl" numTimes={i?i:0} >
	   		   			{(index) => (<NpUI.Blip key={index} content={payload[category][index].Name} />)}
		   			</Repeat>
				</div>
			);
		});
		return <div>{div}</div>;
	}
}
export class Repeat extends React.Component {
	render(){
		var innerDivs = [];
		for (let i = 0; i < this.props.numTimes; i++) { innerDivs.push(this.props.children(i)); }
		return <div className={this.props.className}>{innerDivs}</div>;
	}
}



