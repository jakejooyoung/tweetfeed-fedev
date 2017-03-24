/*
    ./client/components/App.jsx
*/
import React from 'react';
// var json = require('json-loader!localdb/mbit-domains.json');
// var json = require(path.join(__dirname, '../localdb/mbit-domains.json'));
import Domains from 'Db/domains.json'

const NpUI = {
  Button: function Button(props) {
    return (
    	<button className={'btn '+props.action}> 
	    	Post
	    </button>
		);
  },
  Title: function Title(props) {
  	return (
  		<div className='np-title np-border'>
		    <p> {formatWelcomeText(props.user)} </p>
		</div>
	);
  }
}
var categories= [
	'millibitcoin',
	'millibit',
	'millicoin',
	'bitcoin',
	'mbitcoin',
	'ubitcoin',
	'mbit',
	'bitcent',
	'mbtc',	
	'btc',
	'bit',
	'nrl',
	'hodl',
	'tosh'
];
const domains=Domains.DomainList.Domain;
const domainsByCategory=[];
categories.forEach(function(category){
	domainsByCategory[category]=[];
});


export class Feed extends React.Component {
	renderTitle(){ 
		return <NpUI.Title user='Jake'/>
	}
	parseDomainArr(){
		var arr= domains.map(function(obj){
			var dn={
				Name:obj._Name,
				Category:''
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
		// return arr;
		domainsByCategory['bitcoin'].forEach(function (c){ console.log(c)});	
		domainsByCategory['mbtc'].forEach(function (c){ console.log(c)});	
		domainsByCategory['btc'].forEach(function (c){ console.log(c)});
		console.log(domainsByCategory['bitcoin']);
		return arr;
	}
	// dynamicSort(category) {
	//     var arr=[];
	//     for (i=0;i<categories.length;i++){
	//     	var catArr=[];
	//     	feed.map
	//     }
	// }
	renderPosts(){
		// var feed=[];
		// feed=Domains.DomainList.Domain;
		var feed=(this.props.type=='domains') ? this.parseDomainArr():['fdf','fdfd','shihi'];
		return (
			<Repeat className='feed' numTimes={feed.length} >
	   		   	{(index) => <Post key={index} content={feed[index].Name} />}
		    </Repeat>
   		)
	}
	render() {
    	return (
    		<div id='feed-container'>	
				{this.renderTitle()}
				{this.renderPosts()}
			</div>
		);
 	}
}
export class Repeat extends React.Component {
	render(){
		let items = [];
		for (let i = 0; i < this.props.numTimes; i++) {
			items.push(this.props.children(i));
		}
		return <div className={this.props.className}>{items}</div>;
	}
}
export class Post extends React.Component {
	renderButton(){
		return <NpUI.Button action='yes'/>
	}
	render(){
		return (
			<div className='post'>
				<h4>{this.props.reactKey} </h4>
				<p> {this.props.content} </p>
			    {this.renderButton()}
			</div>
		);
	}
}
const user = {
	firstName: 'Jake',
	lastName: 'Kim'
}
function formatWelcomeText(user) {
  	return user+ '\'s Activities';
}











