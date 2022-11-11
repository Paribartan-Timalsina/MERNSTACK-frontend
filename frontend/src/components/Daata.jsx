import React, { useEffect, useState } from 'react'
import axios from "axios"
const Daata = () => {
  const [info,setInfo]=useState([])
 
  const getprofile=async()=>{
    axios.get("/about",{
      method:"GET",
     headers: {
        "Content-Type":"application/json",
        Accept:"application/json"

      },
      credentials:"include"
    }).then((response=>{
      console.log(response.data)
      setInfo(response.data)
      
      
    }))
    // const data=await profile.json()
    // console.log(data)
    //  setInfo(data)
    
  }
  useEffect(()=>{
    getprofile()
    
  },[])
  // const base64String = btoa(String.fromCharCode(...new Uint16Array(info.img.data.data)));
  return (
    
   <>
        
          

       {       
      < div>
                      <h1>Name:{info.name}</h1>
                      <h1> Email:{info.email}</h1>
              </div>
              
                     
        }     
       {
         <div className="container">
        
        
              
           <img src={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint16Array(info.img.data.data)))}`} width="200px" height="200px" alt='naam'/>
              
           
            
       
      </div> 
               
}
</>

)
  
  
        }

export default Daata
