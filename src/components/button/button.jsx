import React from 'react'
import classnames from "classnames";

import "./button.scss";

const Button = ({ children, className, onClick, mode, ...restProps }) => {
  const btnClassName = classnames({
    'button': true,
    'is-white': mode === 'white',
    'is-blue': mode === 'blue',
    [className]: className
  });

  return (
    <button className={btnClassName} onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}

export default Button
