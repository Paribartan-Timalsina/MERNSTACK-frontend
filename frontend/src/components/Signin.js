
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import "../index.css"
import { FaUser, FaLock } from "react-icons/fa";
import CompanyLogo from "../publicimages/Group 2.png"
import DisplayLogo from "../publicimages/j 1.png"
import { CiLogin } from "react-icons/ci";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate()
  const [name, setname] = useState('')
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
          body: JSON.stringify({ name, email }),
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

    setname('')
    setemail('')


  }
  return (
<>
<div className='header'>

        <img src={CompanyLogo} className="companylogo" alt='logo'></img>
      </div>

    <div className="container">
      <div>
        <img src={DisplayLogo} className="displaylogo" alt='logo'></img>
      </div>
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
          <div className="image">
          </div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">

              <FaUser className='react-icons' />
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="input-group mb-3">
              <FaLock className='react-icons' />
              <input type="text" className="form-control" placeholder="Password" />
            </div>
            <div className="input-group mb-3">
             
              <button type="button" className="btn btn-secondary btn-block login">LOGIN</button>
            </div>
          </form>

        </div>
      </div>
    </div>
</>
  )
}

export default Signin
