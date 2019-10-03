import React, {useContext, useEffect, useState} from 'react';

export default() => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [password, setPassword] = useState('');

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



    return {data, title, subTitle, buttonText};
}



