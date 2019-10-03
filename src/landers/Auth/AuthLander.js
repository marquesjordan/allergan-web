import React from 'react';
import './AuthLander.css';
import AuthForm from './AuthForm'

const AuthLander = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                <img src={process.env.PUBLIC_URL + '/alle.PNG'} /> 
                <AuthForm />
            </div>
        </div>
    )
}

export default AuthLander; 