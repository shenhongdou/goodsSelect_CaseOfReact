import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import 'style/goodsSort.css';

import Nav from 'nav/Nav';
import List from 'list/List';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			selected:[]
		}
	}

	choose = (data,order)=>{
		
		let {selected} = this.state;

		let beClicked = selected.some( elt => elt.order === order );

		if(beClicked){
			selected = selected.map(item=>{
				if(item.order === order){
					item.item = data;
				}
				return item
			})
		}else{
			selected.push({item:data,order});
		}
		
		selected.sort((a,b)=>a.order-b.order);	

		this.setState({selected});
	}

	cancel=(id)=>{
		let {selected} = this.state;
		selected = selected.filter(item=>{
			return item.item.id !== id;
		});
		this.setState({selected});
	}

	render(){
		
		let {choose,cancel} = this;
		let {selected} = this.state;

		return (
			<div id="wrap">
				<section id="section">
					<Nav 
						{...{
							selected,
							cancel
						}}
					/>
					<List 
						{...{
							selected,
							choose
						}}
					/>	
				</section>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)