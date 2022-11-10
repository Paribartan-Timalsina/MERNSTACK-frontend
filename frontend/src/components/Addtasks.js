import React from 'react'
import { useState } from 'react'
const Addtasks = ({ Addtaskdiv }) => {
  const [name, setname] = useState('')
  const [email, setroll] = useState('')
  const [password, setpassword] = useState('')
  const [img, setimg] = useState()
  const pushing = async () => {
    const formdata = new FormData()
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("myimage", img)

    const res = await fetch('http://localhost:5000/register',
      {
        method: "POST",
        // headers:{
        //   "Content-Type":"multipart/form-data"
        // },
        body: formdata
      });
    const data2 = await res.json()
    return data2;
  }
  const onsubmeet = (e) => {

    e.preventDefault()

    pushing()

    Addtaskdiv({ name, email, img,password })
    setname('')
    setroll('')
    setimg('')
    setpassword('')
  }
  return (

    <form method="POST" id="formelem" className='add-form' encType='multipart/form-data' onSubmit={onsubmeet}>
      <div className='form-control'>
        <label>Name:</label>
        <input type='text' value={name} name="name" onChange={(e) => (setname(e.target.value))} />
      </div>
      <div className='form-control'>
        <label>Email:</label>
        <input type='email' value={email} name="email" onChange={(e) => (setroll(e.target.value))} />
      </div>
      <div className='form-control'>
        <label>Password:</label>
        <input type='password' value={password} name="password" onChange={(e) => (setpassword(e.target.value))} />
      </div>
      <div className='form-control'>
        <label>profile:</label>
        <input type='file' name="myimage" onChange={(e) => (setimg(e.target.files[0]))} />
      </div>
      <input type='submit' value='Register' className='btn btn-block' />
    </form>
  )
}

export default Addtasks
