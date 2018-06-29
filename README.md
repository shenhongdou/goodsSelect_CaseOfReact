用react写的一个关于不同类型商品选择的小案例

1.知识点：
(1)组件

(2)无状态函数式组件（不用render）
  export default function List (props){
    ...
    return()
  }
  
(3)props

(4)数组的some方法
selected.some( elt => elt.order === order )返回值是布尔值

2.组件拆分：根据UI，拆分成Nav和List两部分 

3.思路：
（1）利用数组的map方法将数据渲染到页面

（2）需要在兄弟组件用到的数据定义在父组件的state里

（3）根据每一条数据的order值来判断每一种数据是否有选择，如果selected里没有选择的order（即没有选择过此种数据）则将数据push到selected里，如果有选择的order值（即已经选择过此种数据），则通过数组的map方法找到对应order值的数据，将点击的数据的对应的值覆盖selected里已有的同样order值对应的数据。

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
    
（4）根据order对选中的数据selected进行排序 selected.sort((a,b)=>a.order-b.order);	

