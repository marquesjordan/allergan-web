import React, {useContext, useEffect, useState} from 'react';
import {Context as AuthContext} from '../../contexts/authContext';
import './AuthLander.css';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css"; 
import Switch from 'react-toggle-switch';
import registerData from './register';

const AuthForm = () => {

    const { state, register } = useContext(AuthContext);
    const {data, title, subTitle, buttonText} = registerData();
    
    const renderInput = () => {
        return data.map( item => {
            return (
                <input key={item.id} onChange={(e) => item.setter(e.target.value)} className='auth-form-input' placeholder={item.label} value={item.val} />
            )
        })
    };
    
    const isInputsComplete = () => {
        const uncompleteList = data.filter( (item) => {
            return item.val === '';
        });
        return uncompleteList.length > 0;
    }

    const handlePress = () => {
        var boundData = {};
        data.forEach( (item) => {
            boundData[item.id] = item.val
        }) 

        console.log(boundData)

    }

    return (
        <div>
            <h2>{title}</h2>
            <div class="auth-form-sub-header">{subTitle}</div>
            <div className="auth-form">
                {renderInput()}
                <button className="auth-form-button" onClick={handlePress} disabled={isInputsComplete()}>{buttonText}</button>
                <div className="auth-form-promo">
                   Send promos and offers via SMS <Switch className="auth-form-promo-switch" on={true} />
                </div>
            </div>
        </div>
    )
}

export default AuthForm