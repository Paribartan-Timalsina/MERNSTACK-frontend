import React from 'react'
import Cartitems from "./Cartitems"
import { useEffect,useContex,useState ,createContext} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setcartProducts } from './actions/productAction'
export const cartContext=createContext()
const Productdetail = () => {
  const dispatch=useDispatch()
    const [data,setdata]=useState([])
    const {_id}=useParams()
    console.log(_id)
    useEffect(()=>{
      callsingleProduct()
      
  },[])
   const  callsingleProduct= async ()=>{
        const res=await fetch("/singleproduct",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify({_id})
        })
        const dataa=await res.json()
        setdata(dataa)
        console.log(dataa)
    }
    
    const addtocart = (item)=>{
      dispatch(setcartProducts(item));
    }
  return (
    <>
     
   <h1>Productname:{data.Productname}</h1>
   <h1> Price:Rs.{data.Price}</h1>
   <h1>Quantity:{data.Quantity}</h1>
   <button onClick={()=>addtocart(data)}>Add to cart</button>

    </>
  )
}

export default Productdetail
