import React, { useContext, useState, createContext, useRef } from 'react'
import { ProductContext } from './Tabs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "../index.css"
import { setcartProducts } from './actions/productAction'
import Cartitems from './Cartitems'

export const CartContext = createContext()
const cartfromStorage = JSON.parse(localStorage.getItem("cart") || "[]")
const Allitems = () => {
  const [query, setQuery] = useState("")
  const [cart, setcart] = useState(cartfromStorage)
  const [items] = useContext(ProductContext)
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const products = useSelector((state) => state.allProducts.products)
 const cartproducts = useSelector((state) => state.cartProducts.cartitems)
  useEffect(() => {
      
    localStorage.setItem("cart", JSON.stringify(cartproducts))
  }, [cartproducts])


      const addtocart =  (items) => {
        dispatch(setcartProducts(items))
        
         
      }



  //   return (
  //     <>

  //     <input value={query}  onChange={(e)=>setQuery(e.target.value)} type="search"/>

  //     <header>
  //       <Link to ="/cartitemlist"> <button> Go to cart ({cart.length})</button></Link>
  //     </header>
  //     <Link to="/logout"><button>Logout</button></Link>

  //  <div className='itemslist'>
  //       {

  //       Array.from( items.filter(data=>{
  //         return  query.toLowerCase()===""?data:data.name.toLowerCase().includes(query)
  //        })).map((product, key) => {
  //           // setitemname(items.name)
  //           // setitemprice(items.price)
  //           return (
  //             <>

  //               <div className='itemslist'>
  //                 <li>
  //                   <h1>Name:{product.Productname}</h1>
  //                   <h1> Price:{product.Price}</h1>
  //                   <h1>Category:{product.Category}</h1>
  //                   <button onClick={() => addtocart(product)}>ADD TO CART</button>
  //                 </li>
  //               </div>
  //             </>
  //           )


  //         })}

  //     </div> 


  //     </>
  //   )
  
 

  
  return (
    <>
    <header>
     <Link to ="/cartitemlist"> <button  >Go to Cart({cartproducts.length})</button></Link>
    </header>
      <div className='itemslist'>
        {

          Array.from(products.filter(data => {
            return query.toLowerCase() === "" ? data : data.name.toLowerCase().includes(query)
          })).map((product, key) => {
            const { _id, Productname, Price, Category } = product
            
            // setitemname(items.name)
            // setitemprice(items.price)
            return (

              <>

                <Link className='block' to={`/product/${_id}`}>
                  <div className='itemslist'>
                    <li>
                      <h1>Name:{product.Productname}</h1>
                      <h1> Price:{product.Price}</h1>
                      <h1>Category:{product.Category}</h1>
                     
                    </li>
                  </div>
                </Link>
                <button onClick={()=>addtocart(product)}>Add to cart</button>
              </>
            )


          })}

      </div>
      
    </>
  )
}


export default Allitems
