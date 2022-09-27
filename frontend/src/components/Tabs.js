
import React, {useState,useEffect} from 'react'
import "../index.css"

const Tabs = () => {
  const [items , setItems] = useState([]);
  
   const getItems= async () => {

    const response = await fetch('http://localhost:5000/displayitems/',
      {
        method: "GET",
  
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
         },
         
      }
    );
    const actualData=await response.json();
    setItems(actualData);
    console.log(items)
      // .then((responsee) => response.json())
      // .then((actualdata) => setItems(actualdata))
  
  }

   useEffect(()=>{
    getItems();
   },[]);
const addtocart= async ()=>{
const res= await fetch('http://localhost:5000/addingtocart',
{
method:"POST",
headers:{

'Content-Type':"application/json"
},
body:JSON.stringify()
})
const data=await res.json()
return data
}

//     const filterMenu = (category) => {
//         const updatedItems = Menu.filter((curElem) => {
//             return curElem.category === category;
//         });

//         setItems(updatedItems);
//     }

   return (



 <div className='itemslist'>
    {
     Array.from(items).map((items,key)=>{
        
        return(
          <>
          <div className='itemslist'>
            <li>
          <h1>Name:{items.Productname}</h1>
        <h1> Price:{items.Price}</h1>
        <h1><button>Category:{items.Category}</button></h1>
        <button onClick={addtocart}>ADD TO CART</button>
        </li>
        </div>
        </>
        )
      
    
        })}
       
       </div> 


    )
 }

export default Tabs