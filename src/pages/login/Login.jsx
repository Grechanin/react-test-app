import React from 'react';
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import Form from '../../components/form/Form.jsx';
import {loginUserAction} from '../../redux/auth-reducer.js'


function Login(props) {
  document.title = "Login";

  const loginUser = (email, password) => {
    props.loginUser(email, password);
  }
  return (
    parseInt(props.isLoged) ?
      <Redirect to='/' />
      :
      <Form formName={ 'Login' } onSubmit={ loginUser } />
  );
}

const mapStateToProps = (state) => {
  return {
    isLoged: state.auth.isLoged
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (userEmail, userPassword) => {
            dispatch(loginUserAction(userEmail, userPassword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);;
