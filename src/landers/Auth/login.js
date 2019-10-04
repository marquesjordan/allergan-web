import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './AuthLander.css';

export default() => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const title = 'Sign in into your account';
    const subTitle = 'Enter login credentials';
    const buttonText = "Sign In";

    
    const data = [
        {id: 'username', label: 'Username', val: username, setter: setUsername },
        {id: 'password', label: 'Password', val: password, setter: setPassword }
    ];

    const footer = () => {
        return (
            <div className="auth-form-footer">
                    <Link to="/register">Create a new account.</Link>
            </div>
        ); 
    }

    return {data, title, subTitle, buttonText, footer};
}



