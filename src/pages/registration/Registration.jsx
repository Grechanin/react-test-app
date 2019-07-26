import React from 'react';
import {connect} from "react-redux";
import Form from '../../components/form/Form.jsx'
import { registerUserAction } from '../../redux/auth-reducer.js'

function Registration(props) {
    document.title = "Registration";
    const registerUser = (email, password) => {
        props.history.push('/');
        props.registerUser(email, password);
        alert("You are seccesfully registered. Now you can login");
    }
    return (
         parseInt(props.isLoged) ?
            <p className='text-center mb-3 mt-3'>You are logged in, please logout to register new account.</p>
            :
            <Form formName={ 'Registration' } onSubmit={ registerUser } />
    );
}

const mapStateToProps = (state) => {
  return {
    isLoged: state.auth.isLoged
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (email, password) => {
            dispatch(registerUserAction(email, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
