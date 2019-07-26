import {createStore, combineReducers} from "redux";
import usersReducer from "./users-reduser.js";
import authReducer from "./auth-reducer.js";
import administrationReducer from "./administration-reducer.js"


let reducers = combineReducers({
    usersPage: usersReducer,
    auth: authReducer,
    administration: administrationReducer
});

let store = createStore(reducers);

export default store;
