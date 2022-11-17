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
import Logout from './Logout'

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
 console.log(products)


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
  const logout= async ()=>{
    const data=await fetch("/logoutt",{
      method:"POST"
    })
    const res=await data
    if (res.status == 200) {
      alert("Successful Logout.")
      navigate("/signin")
    }
    else {
      alert("Logout Unsuccessful")
      
    }
  }
 

  
  return (
    <>
     <header>
     <Link to="/display"><button >About me</button></Link>
    <button onClick={()=>{logout()}}>Logout</button>
     <input value={query}  onChange={(e)=>setQuery(e.target.value)} type="search"/>
    </header>
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
                    {product.name?  <h1>Name:{product.name}</h1>:null}
                     { product.price? <h1> Price:{product.price}</h1>:null}
                      {product.company? <h1>Category:{product.company}</h1>:null}
                   {/* {product.image?  <img src={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint16Array(product.image.data.data)))}`} width="200px" height="200px" alt='naam'/> :null} */}
                      {product.image?<img src={`http://localhost:5000/${product.image}`}/>:null} 
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
