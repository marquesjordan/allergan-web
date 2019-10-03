import allergan from '../api/allergan';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'register':
            return { user: action.payload } 
        default:
            return state;
    }
}

const register = (dispatch) => {
    return async ({firstName, lastName, email, username, mobilePhone, password}) => {
        try {
            const response = await allergan.post('/user', 
            {   
                firstName: firstName,
                lastName: lastName,
                email: email, 
                username: username, 
                mobilePhone: mobilePhone, 
                password: password, 
            });
            console.log('XXXXXXXX ', response.data)
            
            // await AsyncStorage.setItem('token', response.data.token);
            // dispatch({type:'register', payload: response.data.token});
            // navigate('ContactList');
        } catch (err) {
            console.log(err.message)
            dispatch({type: 'add_error', payload: 'Sign Up Error'})
        }
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {register},
    { errorMessage: ''}
)