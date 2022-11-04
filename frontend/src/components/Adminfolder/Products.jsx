import React from 'react'
import { useReducer } from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement, setProducts } from '../actions/productAction'
const Products = () => {
 const dispatch=useDispatch()
 const [query, setQuery] = useState("")
  const navigate=useNavigate()
  const[items,setItems]=useState([])

  useEffect(() => {
    getItems();
  }, []);
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
    dispatch(setProducts(actualData));
  }

  
  const products = useSelector((state) => state.allProducts.products)
 console.log(products)
  return (
    <>
  
        {

          Array.from(products)
            .map((product, key) => {
            const { _id, Productname, Price, Quantity,Category } = product
            console.log(Productname)
            // setitemname(items.name)
            // setitemprice(items.price)
            return (

              <>
              {

               
                  <div>
                    <li>
                      <h1>Name:{product.Productname}</h1>
                      <h1> Price:{product.Price}</h1>
                      <button onClick={()=>dispatch(increment(product.Quantity))}>+</button>
                      <h1>Quantity:{product.Quantity}</h1>
                      <button onClick={()=>dispatch(decrement(product.Quantity))}>-</button>
                     
                    </li>
                  </div>
                
              } 
              </>
            )


          })}

      

</>
)


       

    
  
}

export default Products
