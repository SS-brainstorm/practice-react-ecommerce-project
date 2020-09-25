import React, { useState } from 'react';
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import {auth, createUserProfileDocument} from "../../firebase/firebase";

import "./registration.scss";

const Registration = () => {
    const initialFormData = {
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    };

    const [formData, setFormData] = useState({ ...initialFormData });

    const handleInput = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, passwordConfirm } = formData;

        if (password !== passwordConfirm) {
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            setFormData({ ...initialFormData })
        } catch (error) {
            console.error(error);
        }
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
                    name="displayName"
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
                    name="passwordConfirm"
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
