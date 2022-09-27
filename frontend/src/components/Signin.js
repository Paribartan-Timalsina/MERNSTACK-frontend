
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const Signin = () => {
  const navigate = useNavigate();
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
      const res = await fetch('http://localhost:5000/logeen',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",

          },
          body: JSON.stringify({ name, email }),
        });
      const dataa = await res.json();
      if (dataa.status == 400) {
        alert("unsucessful")
      }
      else {
        alert("congratulations")
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
    <div>
      <form method='POST' className='add-form' >
        <div className='form-control'>
          <label>Name</label>
          <input type='text' name='name' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Email:</label>
          <input type='text' name='email' value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <input type='submit' value='Sign In' className='btn btn-block' onClick={onsubmeet} />
      </form>
    </div>
  )
}

export default Signin
