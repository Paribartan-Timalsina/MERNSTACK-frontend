import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
       <Link to="/register"> <button className='btn'>Register</button></Link>
       <Link to="/signin"> <button className='btn'>Signin</button></Link>
    </div>
  )
}

export default Home
