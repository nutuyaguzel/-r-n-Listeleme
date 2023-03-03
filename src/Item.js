import React from 'react'
import styled from 'styled-components'


function Item({id,title,price,category,description,image}) {
  return (
    <div>
<Listitem>
  <img src={image} />
  <div className='itemdescription'>
    <h3>{title} </h3>
    <p>{category}</p>
    <p className='price'>price:${price}</p>
    <p>{description.length>250 ? (description.substring(0,200)+ '...') : description }</p>
  </div>


</Listitem>

    </div>
    
  )
}

export default Item

const Listitem=styled.div `
height:300px;
width:400px;
border:1px solid rgba(0,0,0,0.1);
border-radius:25px;
img{
  height:300px;
  width:100%;
  object-position:top;
}
cursor:pointer; 
overflow:hidden;

.itemdescription {
  height:100%;
  transition: 0.5s ease;
  opactity:1;
  background:rgba(0,0,0,0.4);
  color:white;

  h3{
    padding:0.3rem;
    text-align:center;
}
p {
  padding:0.5 rem;
  margin-top:-10px;
  margin-left:5px;
  margin-bottom:5px;

}
.price{
  font-weigth:bold;
  font-size:1.2rem;

}
}
&:hover{
  .itemdescription{
    opacity:1;
    transform:translateY(-280px)
  }
}

`