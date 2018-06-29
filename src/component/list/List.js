import React,{Component} from 'react';

import goodsSortData from 'data/goodsSortData';
import Choose from './choose/Choose';

export default function List (props){

	let {selected,choose} = props;

	const LiComp = goodsSortData.map(item=>{
		return (
			<li key={item.id}>
				{item.sort}：
				{item.data.map(elt=>{
					return (
						<Choose
							key={elt.id} 
							{...{
								elt,
								order:item.order,
								choose,
								selected
							}}
						/>)
				})}
			</li>
		)
	})

	return <ul id="type">{LiComp}</ul>
	
}
