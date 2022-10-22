// import React from 'react'
// import { useState } from 'react'
// import { FaLongArrowAltUp } from 'react-icons/fa'
// import StripeCheckout from "react-stripe-checkout"
// import axios from "axios"

// const Stripe = () => {
//     const [product]=useState({
//         name:"aauhahaha",
//         price:120,
//         descritption:"thus us jkdn"

//     })
//     const handleToken=(token,addresses)=>{
//         const response =axios.post("/checkout",{token,product})
//         console.log(response.status)
//     }
//   return (
//     <div>
//       <StripeCheckout
//        stripeKey='pk_test_51LmAKKSFqi6T9Z8MxYtEBUadhjkAK9v1fmFTmDAofXEUcPy0XmCKuHfi0v0zktei1k8OpwDfNeHoZSugxp24E0t900IdepzgwG'
//       token={handleToken}
//       amount={product.price*100}
//       name={product.Name}
//       billingAddress
//       shippingAddress
//       />
//     </div>
//   )
// }

// export default Stripe
import React from 'react'

const Stripe = () => {
const   paymoney = async ()=>{
  try{
  const res= await fetch("/create-checkout-session",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    window.location = url
  })
}catch(err){
  console.log(err)
}
}
  return (
    <div>
     <button onClick={paymoney}>Checkout</button> 
    </div>
  )
}

export default Stripe
