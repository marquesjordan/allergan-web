import allergan from '../api/allergan';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'register':
            return { ...state, user: action.payload, errorMessage: ''} 
        case 'add_error':
            return { ...state, user: {}, errorMessage: action.payload}
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
            // await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'register', payload: response.data});
            // navigate('ContactList');
        } catch (err) {
            console.log(err.response)
            dispatch({type: 'add_error', payload: err.response.data})
        }
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {register},
    { errorMessage: ''}
)