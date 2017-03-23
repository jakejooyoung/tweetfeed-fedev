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
	'bitcoin',
	'millibit',
	'millibitcoin',
	'mbit',
	'bitcent',
	'btc',
	'bit',
	'millicoin',
	'nrl',
	'hodl',
	'tosh'
];
const domains=Domains.DomainList.Domain;
const domainsByCategory=[];
export class Feed extends React.Component {
	renderTitle(){ 
		return <NpUI.Title user='Jake'/>
	}
	parseDomainArr(){
		var arr= domains.map(function(obj){
			var nObj={
				Name:obj._Name,
				Category:''
			};
			nObj.Name=obj._Name;
			categories.forEach(function(category){
				if (!nObj.Category||nObj.Name.includes(category)&&category.length>nObj.Category.length){
					nObj.Category=category;
				}
			});
			return nObj;
		});
		console.log(arr[1].Name ,arr[1].Category);
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











