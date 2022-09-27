import React from 'react'
import { Link } from 'react-router-dom'
 
const Button = ({Addtask,tasks}) => {
  return (
   <Link to="/signin"> <button className='btnc'>Already Have an account!Go to sign in</button></Link>
  )
}

export default Button
