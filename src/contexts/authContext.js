import allergan from '../api/allergan';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth':
            return { ...state, user: action.payload, errorMessage: '', submitDate: Date.now()} 
        case 'add_error':
            return { ...state, user: {}, errorMessage: action.payload, submitDate: Date.now()}
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
            await localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({type:'auth', payload: response.data});
        } catch (err) {
            dispatch({type: 'add_error', payload: err.response.data})
        }
    }
}

const login = (dispatch) => {
    return async ({username, password}) => {
        await localStorage.removeItem('username');
        try {
            const response = await allergan.get(`/user/${username}/${password}`);
            await localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({type:'auth', payload: response.data});
        } catch (err) {
            dispatch({type: 'add_error', payload: err.response.data})
        }
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {register, login},
    { errorMessage: ''}
)