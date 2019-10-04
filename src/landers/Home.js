import _ from 'lodash';
import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../contexts/authContext';


const Home = () => {
    const {state} = useContext(AuthContext);

    useEffect(() => {
        const userObj = JSON.parse(window.localStorage.getItem('user'));
        if (_.isEmpty(userObj)) {
            window.location.href = './login'
        }
    }, []);

    const handleLogout = () => {
        window.localStorage.removeItem('user');
        window.location.href = './login'
    }

    const logoutStyle = {
        color: 'blue',
        cursor: 'pointer'
      };

    const renderHome = () => {
        const userObj = JSON.parse(window.localStorage.getItem('user'));

        if (userObj === null ) {
            return null;
        }
    
        return (
            <div>
                <h1>Welcome {userObj.firstName} {userObj.lastName}</h1>
                <h4 style={logoutStyle} onClick={handleLogout}>Logout</h4>
            </div>
        )
    }

    return (
        <>
            {renderHome()}
        </>
    )
}

export default Home