import React, { useContext, useState ,createContext, useRef} from 'react'
import { ProductContext } from './Tabs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
export const CartContext=createContext()
const cartfromStorage=JSON.parse(localStorage.getItem("cart") || "[]")
const Allitems = () => {
  const[query,setQuery]=useState("")
    const [cart,setcart]=useState(cartfromStorage)
    const [items] =useContext(ProductContext)
   
    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
    const addtocart =  (items) => {
        setcart((current)=>[...current,items])
    }
        
      
   
  return (
    <>
    
    <input value={query}  onChange={(e)=>setQuery(e.target.value)} type="search"/>
      
    <header>
      <Link to ="/cartitemlist"> <button> Go to cart ({cart.length})</button></Link>
    </header>
    
 <div className='itemslist'>
      {
         
      Array.from( items.filter(data=>{
        return  query.toLowerCase()===""?data:data.name.toLowerCase().includes(query)
       })).map((product, key) => {
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            <>
           
              <div className='itemslist'>
                <li>
                  <h1>Name:{product.Productname}</h1>
                  <h1> Price:{product.Price}</h1>
                  <h1>Category:{product.Category}</h1>
                  <button onClick={() => addtocart(product)}>ADD TO CART</button>
                </li>
              </div>
            </>
          )


        })}

    </div> 


    </>
  )
}


export default Allitems
