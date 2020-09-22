import React from 'react'

import './form-input.scss';

const FormInput = ({ onChange, label, ...rest }) => {
  const fid = `fid-${Math.random().toString(36).substr(2, 16)}`;

  return (
    <div className='form-field'>
      {label && <label htmlFor={fid} className='form-field__label'>{label}</label>}
      <input id={fid} onChange={onChange} {...rest} className='form-field__control' />
    </div>
  )
}

export default FormInput
