import React from 'react'
import { useReducer } from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement, setProducts } from '../actions/productAction'
const Products = () => {
  const products = useSelector((state) => state.allProducts.products)
 const dispatch=useDispatch()
 const [query, setQuery] = useState("")
  const navigate=useNavigate()
  const[items,setItems]=useState([])

  useEffect(() => {
    getItems();
    localStorage.setItem("admin",JSON.stringify(products))
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

  
  
 console.log(products)
 const quantitychange=(item,e)=>{
  dispatch(increment(item,e))
 }
 const updatedatabase= async ()=>{
  const res=await fetch("http://localhost:5000/updatedata/",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",

      },
      body: JSON.stringify(products),
    });
    
    
    
    
  }
 
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
                      <h1>Quantity:</h1>
                      <input type="number" min="1" value={product.Quantity} onChange={(e)=>quantitychange(product,e.target.value)}/>
                     
                     
                    </li>
                  </div>
                
              } 
              </>
            )


          })}

<button onClick={()=>updatedatabase()}>Update to database</button>

</>
)


       

    
  
}

export default Products
