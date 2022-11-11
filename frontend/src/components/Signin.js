
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import "./Signin.css"
import { FaUser, FaLock } from "react-icons/fa";
import CompanyLogo from "../publicimages/Group 2.png"
import DisplayLogo from "../publicimages/j 1.png"
import { CiLogin } from "react-icons/ci";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate()
  const [password, setpassword] = useState('')
  //const[email,setemail]=useState({name:'',email:''})
  const [email, setemail] = useState('')
  // let naame,value;
  // const wechanged=(e)=>{
  //     name=e.target.name;
  //    value=e.target.value;
  //    console.log(value)
  //     setinfo({...info,[name]:value})
  // }
  const push = async () => {
    try {
      const res = await fetch('/logeen',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",

          },
          body: JSON.stringify({ password, email }),
        });
      const dataa = await res;
      if (dataa.status == 400 || dataa.status === 401) {
        alert("Unsuccessful Login Please try again")
      }
      else {
        alert("Welcome to E-DOKO.Press OK to continue")
        navigate("/itemlist")
      }


    }
    catch (err) {
      console.log(err)
    }
  }
  const onsubmeet = (e) => {

    e.preventDefault()
    push()

    setpassword('')
    setemail('')


  }
  return (
<div>
      <div className='header'>

        <img src={CompanyLogo} className="companylogo" alt='logo'/>
      </div>

    <div className="container">
      <div>
        <img src={DisplayLogo} className="displaylogo" alt='logo'/>
      </div>
      <div className="form-box">
       
        <div className="body-form">
          <form method='POST'  onSubmit={onsubmeet} >
            <div className='text'>LOGIN HERE</div>
            <div className="input-group mb-3">

              <FaUser className='react-icons' />
              <input type="text" className="form-control" name='email' value={email} placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="input-group mb-3">
              <FaLock className='react-icons' />
              <input type="password" className="form-control" name='password' value={password} placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <div className="input-group mb-3">
             
              <input type="submit" value="Login" className="btn btn-secondary btn-block login" />
            </div>
            <div className="input-group mb-3">
             
             <Link style={{color:"#0dbeb6",fontWeight:"bold",padding:"3%"}} to="/register">Don't have an account go to SIGNUP</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
</div>
  )
}

export default Signin
