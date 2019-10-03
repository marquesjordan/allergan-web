import React from 'react';
import './AuthLander.css';
import RegisterForm from '../../components/RegisterForm'

const AuthLander = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <img src={process.env.PUBLIC_URL + '/alle.PNG'} /> 
                <RegisterForm />
            </div>
        </div>
    )
}

export default AuthLander; 