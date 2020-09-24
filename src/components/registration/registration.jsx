import React, { useState } from 'react';
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./registration.scss";

const Registration = () => {
    const [formData, setFormData] = useState({
        'display_name': '',
        'email': '',
        'password': '',
        'password_confirm': '',
    });

    const handleInput = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="form-box">
            <div className="form-box__content">
                <h2 className="form-box__title">I don't have an account</h2>
                <p className="form-box__teaser">Sing up with your email and password</p>
            </div>
            <form action="" className="form form-box__form" onSubmit={handleSubmit}>
                <FormInput
                    className="form__field"
                    onChange={handleInput}
                    placeholder="Display Name"
                    type="text"
                    name="display_name"
                    label="Display Name"
                />
                <FormInput
                    className="form__field"
                    onChange={handleInput}
                    placeholder="Email"
                    type="email"
                    name="email"
                    label="Email"
                />
                <FormInput
                    className="form__field"
                    onChange={handleInput}
                    placeholder="Password"
                    type="password"
                    name="password"
                    label="Password"
                />
                <FormInput
                    className="form__field"
                    onChange={handleInput}
                    placeholder="Confirm Password"
                    type="password"
                    name="password_confirm"
                    label="Confirm Password"
                />
                <div className="form__actions">
                    <Button type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
    );
};

export default Registration;
