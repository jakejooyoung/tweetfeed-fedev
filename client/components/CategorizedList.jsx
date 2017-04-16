import React from "react";
import update from 'react-addons-update';
import Domains from "Db/domains.json"
import {ActionIcons, Fixed, Repeat, Blip} from "./NopainUI.jsx"

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
		// This is where you set db call to get posts.
		// e.g. get array of domains sorted by domain name.
  		// let data=this.sortByCategory();
		this.handleSelection = this.handleSelection.bind(this);
		this.resetSelections = this.resetSelections.bind(this);
		this.state = {
			items:this.props.items,
		    count:this.props.count,
		    selectedItems: []
	  	};
	}
	
	handleSelection(item){
		if (this.state.selectedItems.includes(item)){
			let array = this.state.selectedItems;
		    let index = array.indexOf(item)
			array.splice(index, 1);
			this.setState({people: array });
		} else {
			this.setState(update(this.state, {selectedItems: {$unshift: [item]}}));
	   		console.log(this.state.selectedItems);
		}	
	}
	renderItems(){
		var payload=this.state.items;
		let selected=this.state.selectedItems;
		// Construct and return array of containers for list of current index.
		return Object.keys(payload).map(
			function(category){
				let arr=payload[category];
				return (
					<div key={category} className={this.props.wrapperType}>
						<Repeat className="npUl" numTimes={arr.length?arr.length:0}>
		   		   			{(index) => (<Blip 
	   		   					className={selected.includes(arr[index].Name)?"selected":"unselected"} 
	   		   					key={index} 
	   		   					content={arr[index].Name} 
	   		   					handleSelection={() => this.handleSelection(arr[index].Name)}/>
	   		   				)}
			   			</Repeat>
					</div>
				);
			}, 
			this
		);
	}
	resetSelections(){ this.setState({selectedItems:[]}); }
	// What can users do with selections?
	renderSelectionsHeader(){
		//Hint: when making into separate component, pass state.sI as one of the props.
		let selectionsCount=this.state.selectedItems.length;
		let totalCount=this.state.count;
		// Title displays call to action or summary of selections. 
		const title=(
			<span>
			{(!selectionsCount) ? 
				[totalCount,this.props.titleText].join(" "): 
				[selectionsCount, this.props.itemName+(selectionsCount>1?"s":""),"Selected"].join(" ")}
			</span>
		)
		// Reset Button lets users reset their selections
		const resetBtn=(
			(selectionsCount) ? 
				<a onClick={() => this.resetSelections()}
					role="button" 
					className="subaction" 
					>Clear All</a> : 
				null
		)
		// Main Button is what users can do with their selections.
		const mainBtn=(
			<ActionIcons onClick={() => this.resetSelections()} 
				disabled={!selectionsCount} 
				float="right" 
				icon="share"/>
		)
		return (
			<Fixed padding="0 18px" height={80} fixedTop={this.props.fixedTop}>
				{title}
				{resetBtn}
				{mainBtn}
			</Fixed>
		)
	}
	render(){
		return (
			<div style={{"width":"inherit"}}>
				{this.renderSelectionsHeader()}
				{this.renderItems()}
			</div>
		)
	}
}

var some=function sortByCategory(){
	// Category names to sort list by.  
	let categories=[];
	// List you'd like to categorize.
	let list=[];
	// This is the array we will be returning. 
	// Arrays of items indexed by category
	let categorized=[];
	let uncategorized=[];

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
		}
		count++;
		return item;
	});
	//Include unmatched items in a separate category.
	categorized["uncategorized"]=uncategorized;
	return [categorized, count];
}
let data=some();
CategorizedList.defaultProps={
	items:data[0],
	count:data[1],
  	titleText:"Millibit Era Domains",
	itemName:"Domain"
}
