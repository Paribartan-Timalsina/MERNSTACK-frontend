import { useDispatch } from 'react-redux'
import React, { useState, useEffect, createContext } from 'react'
import "../index.css"
import Allitems from './Allitems'
import { setProducts } from './actions/productAction'
 export const ProductContext=createContext()

const Tabs = () => {
  const [items, setItems] = useState({});
  const dispatch=useDispatch()
  // const [itemname, setitemname] = useState();
  // const [itemprice, setitemprice] = useState();
  const [itemtocart, setitemtocart] = useState([]);


  const getItems = async () => {

    const response = await fetch('http://localhost:5000/displayitems/',
      {
        method: "GET",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },

      }
    );
    const actualData = await response.json();
    dispatch(setProducts(actualData));
    
  }

  useEffect(() => {
    getItems();
  }, []);
  // const addtocart = async (items) => {
  //   setitemtocart(items)
  //   const res = await fetch('http://localhost:5000/addingtocart',
  //     {
  //       method: "POST",
  //       headers: {

  //         'Content-Type': "application/json"
  //       },
  //       body: JSON.stringify(itemtocart)
  //     })
  //   const data = await res.json(
  //     {

  //     }
  //   )
  //   return data
  // }

  //     const filterMenu = (category) => {
  //         const updatedItems = Menu.filter((curElem) => {
  //             return curElem.category === category;
  //         });

  //         setItems(updatedItems);
  //     }

  return (
  
<ProductContext.Provider value={[]}>
<Allitems/>
</ProductContext.Provider>
)
}
   

 

export default Tabs