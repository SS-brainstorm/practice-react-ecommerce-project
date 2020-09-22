import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './sign-in.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='sign-in'>
      <div className='sign-in__content'>
        <h2 className='sign-in__title'>You already have an account</h2>
        <p className='sign-in__teaser'>Sign in with your email and password</p>
      </div>
      <form action='' className='sign-in__form' onSubmit={handleSubmit}>
        <FormInput onChange={handleInput} name='email' label='Email' />
        <FormInput onChange={handleInput} name='password' label='Password' />
        <div className='sign-in__actions'>
          <Button type='submit'>Sign in</Button>
          <Button type='button'>Sign in with google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
