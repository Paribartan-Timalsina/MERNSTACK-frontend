import React, { useState } from 'react'

const AddProduct = () => {
  const [name,setName]=useState()
  const [price,setPrice]=useState()
  const [company,setCategory]=useState()
  const [stock,setQuantity]=useState()
  const pushing = async () => {
    try {
      const res = await fetch('/items',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",

          },
          body: JSON.stringify({ name, price,company,stock }),
        });
        const data=await res.json()
        return data
}
    catch (err) {
      console.log(err)
    }
  }
  const onsubmeet = (e) => {

    e.preventDefault()

    pushing()

    
    setName('')
    setPrice('')
    setCategory('')
    setQuantity('')
  }


  return(
    <form method="POST" id="formelem" className='add-form' /*encType='multipart/form-data'*/ onSubmit={onsubmeet}>
    <div className='form-control'>
      <label>Name:</label>
      <input type='text' value={name} name="name" onChange={(e) => (setName(e.target.value))} />
    </div>
    <div className='form-control'>
      <label>Price:</label>
      <input type='number' value={price} name="price" onChange={(e) => (setPrice(e.target.value))} />
    </div>
    <div className='form-control'>
      <label>Quantity:</label>
      <input type='number' value={company} name="quantity" onChange={(e) => (setQuantity(e.target.value))} />
    </div>
    <div className='form-control'>
      <label>Category:</label>
      <input type='text' value={stock} name="category" onChange={(e) => (setCategory(e.target.value))} />
    </div>
    {/* <div className='form-control'>
      <label>Image:</label>
      <input type='file' name="myimage" onChange={(e) => (setimg(e.target.files[0]))} />
    </div> */}
    <input type='submit' value='Add Product' className='btn btn-block' />
  </form>
  )
}

export default AddProduct
