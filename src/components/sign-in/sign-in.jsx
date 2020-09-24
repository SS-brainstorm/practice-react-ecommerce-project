import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { signInWithGoogle } from "../../firebase/firebase";

import "./sign-in.scss";

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
    <div className="form-box">
      <div className="form-box__content">
        <h2 className="form-box__title">You already have an account</h2>
        <p className="form-box__teaser">Sign in with your email and password</p>
      </div>
      <form action="" className="form form-box__form" onSubmit={handleSubmit}>
        <FormInput className="form__field" onChange={handleInput} name="email" label="Email" />
        <FormInput className="form__field" onChange={handleInput} name="password" label="Password" />
        <div className="form__actions">
          <Button type="submit">Sign in</Button>
          <Button type="button" mode="blue" onClick={signInWithGoogle}>Sign in with google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
