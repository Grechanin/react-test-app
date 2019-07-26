import * as data from '../data/users.json';


const GET_USERS = 'GET_USERS';
const GET_USER_INFO = 'GET_USER_INFO';
const IS_ACTIVE_TOGGLE = 'IS_ACTIVE_TOGGLE';

let initialState = {
    users: [],
    userInfo: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...state.users, ...data.users]
            }

        case GET_USER_INFO:
            return {
                ...state,
                userInfo: state.users.find(x => x.id === parseInt(action.data.userId))
            }

        case IS_ACTIVE_TOGGLE:
            const newState = state.users.map(user => {
                const userId = parseInt(action.data.userId);
                if (user.id === userId) {
                    user.isActive = !user.isActive;
                }
                return user;
            });

            return {
                ...state,
                users: newState
            }

        default:
            return state;
    }
}


export const getUsers = () => ({type: GET_USERS});
export const getUserInfo = (userId) => ({type: GET_USER_INFO, data: { userId }});
export const isActiveToggle = (userId) => ({type: IS_ACTIVE_TOGGLE, data: { userId }});


export default usersReducer;
