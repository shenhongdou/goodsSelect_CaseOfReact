import React,{Component} from 'react';

export default function Choose (props){

	let {elt,order,choose,selected} = props;
	
	return (
		<a 
			key={elt.id} 
			href="javascript:;"
			className={selected.some(item => item.item.id === elt.id) ? "active" : '' }
			onClick={()=>{
				choose(elt,order);
			}}
		>
			{elt.desc}
		</a>
	)
	

}