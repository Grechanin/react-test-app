import React, { useState } from 'react';
import s from './Form.module.css'

function Form(props) {

    // created state values using react hooks insted of class components
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [emailValidationError, setEmailValidationError] = useState(null);
    const [passwordValidationError, setPasswordValidationError] = useState(null);

    const onInputChangeHandler = (e) => {
        e.preventDefault();
        if (e.currentTarget.name === 'email') setUserEmail(e.currentTarget.value);
        if (e.currentTarget.name === 'password') setUserPassword(e.currentTarget.value);
    }

    const onBlurEmailValidation = (e) => {
        e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        e.currentTarget.value.match(mailformat) ? setEmailValidationError(false) : setEmailValidationError(true);
    }

    const onBlurPasswordValidation = (e) => {
        e.preventDefault();
        e.currentTarget.value.length === 6 ? setPasswordValidationError(false) : setPasswordValidationError(true);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (emailValidationError !== null && passwordValidationError !== null && !emailValidationError && !passwordValidationError){
            props.onSubmit(userEmail, userPassword);
        }
    }

  return (
    <div>
        <h1 className='text-center mb-3 mt-3'>{ props.formName }</h1>
        <div className = { s.form } >
            <form onSubmit={ onSubmitHandler }>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className={ emailValidationError ? "form-control border-danger" : "form-control" }
                  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ onInputChangeHandler }
                  onBlur={ onBlurEmailValidation } name="email" placeholder="Enter email" />
                { emailValidationError ?
                    <small id="emailHelp" className="form-text text-danger">Enter valid email please!</small>
                    :
                    <small id="emailHelp" className="form-text" >We'll never share your email with anyone else.</small>
                }
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className={ passwordValidationError ? "form-control border-danger" : "form-control" }
                 id="exampleInputPassword1" aria-describedby="passwordHelp" onChange={ onInputChangeHandler }
                 name="password" onBlur={ onBlurPasswordValidation } placeholder="Password" />
                <small id="passwordHelp" className={ passwordValidationError ? "form-text text-danger" : "form-text" }>Password must be 6 chars length!</small>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default Form;

