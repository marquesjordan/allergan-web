import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../contexts/authContext';

const Register = () => {
    const {state, register } = useContext(AuthContext);

    useEffect( () => {
        register({
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email', 
            username: 'username', 
            mobilePhone: '5555556666', 
            password: 'password'
        })
    }, [])

    return (
        <div>
            Register
        </div>
    )
}

export default Register