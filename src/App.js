import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Item from "./Item";

function App() {
  const[items,setİtems]=useState([])
  useEffect(async()=>{
    const data= await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    console.log(result)
    setİtems(result);
  
  },[])
  return (
    <div>
     <Header>
      <input placeholder="Search item..." />
      <button type="button" className="btn btn-outline-secondary">Search</button>
     </Header>

     <Items>
      {items.map(item=>(<Item key={item.id} image={item.image} title={item.title} price={item.price} category={item.category} description={item.description} />))}
     </Items>
    </div>
  );
}

export default App;
const Header=styled.header`
display:flex;
align-items:center;
justify-content:center;
min-height:10vh;
border-bottom:1px solid rgba(0,0,0,0.2);
font-size:1rem;

input{
  padding:0.5rem;
  margin-right:5px;
  width:200px;
  outline:none;


}
button{
  padding:0.5rem 2rem;
  margin-right:15px;
  cursor:pointer;
  transition: 0.2s ease;
  
}
button:hover{
  background:black;
  color:white;
  border:none;
}


`
const Items =styled.div`
margin-top:20px;
display:grid;
grid-template-columns:repeat(auto-fit,400px);
gap:10px;
min-height:80vh;
width:90vw;
margin:10px auto;




`
