import React ,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    let navigate=useNavigate()
    useEffect(()=>{
    fetch("/logoutt",{
    
        method: "GET",

        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
         credentials:"include",
      }).then((res)=>{
        navigate("/signin")
        console.log("hello")
      })

    },[])
  return (
    <>
    
    </>
  )
}

export default Logout
