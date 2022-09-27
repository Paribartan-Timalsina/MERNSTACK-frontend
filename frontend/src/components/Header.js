import React from 'react'
import PropTypes from 'prop-types'//this helps to declare which data type we are using for particular thing
import Button from './Button'
const Header = ({title,tasks,Addtask}) => {
  return (
    <>
        <h3>{title}</h3>
       <Button   />
    </>
  )
}
Header.propTypes={
    title:PropTypes.string,
}

export default Header
