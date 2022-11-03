import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
  
    const [data,setdata]=useState([])
    const {_id}=useParams()
    console.log(_id)
    useEffect(()=>{
      callsingleProduct()
      localStorage.setItem("cartlist",JSON.stringify())
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
      
      localStorage.setItem("cartlist",JSON.stringify(item))
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
