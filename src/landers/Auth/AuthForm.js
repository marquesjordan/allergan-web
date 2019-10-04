import _ from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import {Context as AuthContext} from '../../contexts/authContext';
import './AuthLander.css';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css"; 
import registerData from './register';
import loginData from './login';

const AuthForm = ({authType}) => {

    const { state, register, login } = useContext(AuthContext);
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState('');
    const {data, title, subTitle, buttonText, footer} = authType === 'register' ? registerData() : loginData();
    
    const renderInput = () => {
        return data.map( item => {
            return (
                <input key={item.id} onChange={(e) => item.setter(e.target.value)} className='auth-form-input' placeholder={item.label} value={item.val} />
            )
        })
    };

    useEffect(() => {
        const userObj = JSON.parse(window.localStorage.getItem('user'));
        
        if (userObj !== null) {
            window.location.href = './'
        }
        setPending(false);
        setErrors(state.errorMessage);
    }, [state.submitDate])
    
    const isInputsComplete = () => {
        const uncompleteList = data.filter( (item) => {
            return item.val === '';
        });
        return uncompleteList.length > 0;
    }

    const handlePress = () => {
        setPending(true);
        setErrors('');
        var boundData = {};
        data.forEach( (item) => {
            boundData[item.id] = item.val
        }) 

        if (authType === 'register') { 
            register(boundData);
        } else {
            login(boundData);
        }

    }
    
    return (
        <div>
            <h2>{title}</h2>
            <div className="auth-form-sub-header">{subTitle}</div>
            <div className="auth-form">
                {renderInput()}
                <div className="auth-form-error-message">{errors ? `Sorry, ${errors}` : ''}</div>
                {pending ? 
                    <div className="loader"></div> :
                    <button className="auth-form-button" onClick={handlePress} disabled={isInputsComplete()}>{buttonText}</button>                  
                }
                {footer()}
            </div>
        </div>
    )
}

export default AuthForm