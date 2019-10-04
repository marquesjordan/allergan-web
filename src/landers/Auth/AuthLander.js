import React from 'react';
import './AuthLander.css';
import AuthForm from './AuthForm'

const AuthLander = ({authType}) => {
    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                <img src={process.env.PUBLIC_URL + '/alle.PNG'} /> 
                <AuthForm authType={authType} />
            </div>
        </div>
    )
}

export default AuthLander; 