import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-toggle-switch';
import './AuthLander.css';


export default() => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [password, setPassword] = useState('');
    const [promo, setPromo] = useState(false);

    const title = 'Create your new account';
    const subTitle = 'Enter Registration Info';
    const buttonText = "Create Account";

    
    const data = [
        {id: 'firstName', label: 'First Name', val: firstName, setter: setFirstName },
        {id: 'lastName', label: 'Last Name', val: lastName, setter: setLastName },
        {id: 'email', label: 'Email Address' , val: email, setter: setEmail },
        {id: 'mobilePhone', label: 'Mobile Number', val: mobilePhone, setter: setMobilePhone },
        {id: 'username', label: 'Username', val: username, setter: setUsername },
        {id: 'password', label: 'Password', val: password, setter: setPassword }
    ];

    const toggleSwitch = () => {
        const val = promo;
        setPromo(!val);
    }

    const footer = () => {
        return (
            <div className="auth-form-footer">
                <div className="auth-form-promo">
                    Send promos and offers via SMS <Switch onClick={() => toggleSwitch()} on={promo} className="auth-form-promo-switch" />
                </div>
                <div>
                    <Link to="/login">Alrady have an account?</Link>
                </div>
            </div>
        ); 
    }

    return {data, title, subTitle, buttonText, footer};
}



