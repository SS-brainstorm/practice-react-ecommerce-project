import React from 'react';

import SignIn from '../../components/sign-in/sign-in';

import './login.scss';

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='login-page'>
        <div className='login-page__sign-in'>
          <SignIn />
        </div>
        <div className='login-page__registration'>
          2
        </div>
      </div>
    </div>
  )
}

export default LoginPage
