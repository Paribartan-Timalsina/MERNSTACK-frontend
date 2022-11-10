import React, { useEffect, useState } from 'react'

const Daata = () => {
  const [info,setInfo]=useState({})
  const getprofile=async()=>{
    const profile=await fetch("/about",{
      method:"GET",
     headers: {
        "Content-Type":"application/json",
        Accept:"application/json"

      },
      credentials:"include"
    })
    const data=await profile.json()
    console.log(data)
     setInfo(data)
    console.log({info})
  }
  useEffect(()=>{
    getprofile()
  },[])
   
  return (
    <>
   
        {
          
              
      <>
                      <h1>Name:{info.name}</h1>
                      <h1> Email:{info.email}</h1>
              </>
              
                     
        }               


</>
)
  
  
        }

export default Daata
