import React from 'react'
import { useState,useEffect } from 'react'
const Products = () => {
  const[items,setItems]=useState([])

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
    const data=await res.json()
    return data
    
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
  }, []);
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
                  <h1> Quantity:{items.Quantity}</h1>
                  <button onClick={() => deleteitem(items.Productname)}>Delete Item</button>
                 
                </li>
              </div>
            
          )


        })}

    </>
          )


       

    
  
}

export default Products
