import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Users = () => {
  const [users,setUsers]=useState([])

  const getItems = async () => {

    const response = await fetch('http://localhost:5000/things/',
      {
        method: "GET",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },

      }
    );
    const actualData = await response.json();
    setUsers(actualData);
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
    {
     Array.from(users).map((users, key) => {
          // setitemname(items.name)
          // setitemprice(items.price)
          return (
            
           
              <div className='itemslist'>

                <li>
                  <h1>Name:{users.name}</h1>
                  <h1> Email:{users.email}</h1>
                 
                 
                </li>
              </div>
            
          )


        })}
    </>
  )
}

export default Users
