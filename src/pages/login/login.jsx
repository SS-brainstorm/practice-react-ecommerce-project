import React from "react";
import SignIn from "../../components/sign-in/sign-in";

import "./login.scss";
import Registration from "../../components/registration/registration";

function Login(props) {
    return (
        <div className="container">
            <div className="login-page">
                <div className="login-page__sign-in">
                    <SignIn />
                </div>
                <div className="login-page__registration">
                    <Registration />
                </div>
            </div>
        </div>
    );
}

export default Login;
