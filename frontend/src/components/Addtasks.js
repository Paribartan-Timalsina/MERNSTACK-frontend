import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Addtasks = ({ Addtaskdiv }) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [number, setnumber] = useState('')
  const [img, setimg] = useState('')
  const pushing = async () => {
   
    const formdata = new FormData()
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("number",number)
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

    //Addtaskdiv({ name, email, img,password })
    setname('')
    setemail('')
    setimg('')
    setpassword('')
    setnumber('')
  }
  return (
<>
<div className='register'>
   
          <form method='POST' className='form-boxregister' onSubmit={onsubmeet} >
             <div className="input-group mb-3">

<h2 className='heading'>Name:</h2>
<input type="text" className="form-control" name='name' value={name} placeholder="Full Name" onChange={(e)=>{setname(e.target.value)}}/>
</div>
           
            <div className="input-group mb-3">

              <h2 className='heading'>Email:</h2>
              <input type="text" className="form-control" name='email' value={email} placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="input-group mb-3">
              <h2 className='heading'>Password:</h2>
              <input type="password" className="form-control" name='password' value={password} placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <div className="input-group mb-3">
              <h2 className='heading'>Phone Number:</h2>
              <input type="number" className="form-control" name='number' value={number} placeholder="Number" onChange={(e)=>{setnumber(e.target.value)}}/>
            </div>
            <div className="input-group mb-3">
              <h2 className='heading'>Profile:</h2>
              <input type="file" className="form-control" name='profile'   onChange={(e)=>{setimg(e.target.files[0])}} />
            </div>
            <div className="input-group mb-3">
             
              <input type="submit" value="Register" className="btn btn-secondary btn-block login" />
            </div>
            

          </form>

          
             
           <Link to="/signin" className='heading' >Already have an account.Login here!</Link>
         
         </div>

      </> 
  )
}

export default Addtasks
