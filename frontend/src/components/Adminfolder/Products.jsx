import React from 'react'
import { useReducer } from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const reducer=(state,action)=>{
switch(action.type){
  case "INCREMENT":
    return {count:state.count+1}
}
  }
  function increment(){
    console.log("hii")
    dispatch({type:"INCREMENT"})
  }
  const navigate=useNavigate()
  const[items,setItems]=useState([])
 const [state,dispatch]=useReducer(reducer,{count:0})

  const deleteitem= async (product)=>{
    console.log(product)
    
    const res=await fetch("http://localhost:5000/deleteitems/",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",

      },
      body: JSON.stringify({product}),
    });
    
    navigate("/admin/productlist/")
    
    
  }
  const getItems = async () => {

    const response = await fetch('http://localhost:5000/displayitems/',
      {
        method: "GET",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },

      }
    );
    const actualData = await response.json();
    setItems(actualData);
  }

  useEffect(() => {
    getItems();
  }, [items]);
  return (
    <>
    {
       Array.from(items).map((items, key) => {
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            
           
              <div className='itemslist'>

                <li>
                  <h1>Name:{items.Productname}</h1>
                  <h1> Price:{items.Price}</h1>
                  <button onClick={increment}>+</button>
                  <h1> Quantity:{items.Quantity}</h1>
                  <button>-</button>
                  <br></br>
                  <button onClick={() => deleteitem(items.Productname)}>Delete Item</button>
                 
                </li>
              </div>
            
          )


        })}

    </>
          )


       

    
  
}

export default Products
