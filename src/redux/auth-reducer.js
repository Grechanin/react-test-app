const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';


let initialState = {
    email: null,
    password: null,
    isLoged: localStorage.getItem('isLoged'),
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            localStorage.setItem('email', action.data.email);
            localStorage.setItem('password', action.data.password);
            localStorage.setItem('isLoged', '0');

            return {
                ...state,
                ...action.data,
                isLoged: '0',
                isAuth: true
            }

        case LOGIN_USER:
            const isEmailExists = localStorage.getItem('email') === action.data.email;
            const isPasswordExists = localStorage.getItem('password') === action.data.password;
            if (isEmailExists && isPasswordExists){
                localStorage.setItem('isLoged', '1');
                return {
                    ...state,
                    ...action.data,
                    isLoged: '1'
                }
            }
            alert('Wrong email or password!');
            return state

        case LOGOUT_USER:
            localStorage.setItem('isLoged', '0');
            return {
                ...state,
                isLoged: '0'
            }

        default:
            return state;
    }
}


export const registerUserAction = (email, password) => ({type: REGISTER_USER, data: { email, password} });
export const loginUserAction = (email, password) => ({type: LOGIN_USER, data: { email, password} });
export const logoutUserAction = () => ({type: LOGOUT_USER});

export default authReducer;
