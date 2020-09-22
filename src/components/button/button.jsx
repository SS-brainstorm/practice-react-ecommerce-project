import React from 'react'

const Button = ({ children, className, onClick, ...restProps }) => {
  return (
    <button className='button' onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}

export default Button
