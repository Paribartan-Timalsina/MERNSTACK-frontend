import React from 'react'

const Daata = ({posting}) => {
   
  return (
    <>
    <div className="container">
        {posting.map((post,key)=>{
        
              const base64String = btoa(String.fromCharCode(...new Uint16Array(post.img.data.data)));
          return <img src={`data:image/png;base64,${base64String}`} width="200px" height="200px" alt='naam'/>
                //  <h1>{post.email} </h1>
                // <h2>{post.name}</h2>
                 
           
                })}
       
      </div>
      <div className="container">
      {posting.map((posts,key)=>{
       
            //  <h1>{post.name}</h1>
      
            
              return <><h1> Email:{posts.email} </h1>
                <h2>Name:{posts.name}</h2>
               </>
         
              })}
     
    </div>
    </>
  )
  
        }

export default Daata
