
import React,{Component} from 'react';

export default function List (props){
	
	let {selected,cancel} = props;

	const chooseComp = selected.map((item,index)=>{

		return (
			<mark key={index}>
				{item.item.desc}
				<a 
					href="javascript:;"
					onClick={()=>{
						cancel(item.item.id);
					}}
				>x</a>
			</mark>
		)
	});

	return (
		<nav id="choose">
	        你的选择：
			{chooseComp}
		</nav>
	)
	
}
