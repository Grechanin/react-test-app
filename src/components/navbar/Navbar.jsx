import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {logoutUserAction} from "../../redux/auth-reducer.js"

function Navbar(props) {

  const onSearchClick = (e) => {
    e.preventDefault();
    alert("Не зрозумів завдання.\nЯкі саме елементи потрібно шукати (пункт №4).");
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to='/'>React test app</Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarsExample03">

        { !parseInt(props.isLoged) ?
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/registration'>Registration</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/login'>Login</Link>
          </li>
        </ul>
          :
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/' onClick={ props.userLogout } >Logout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/users'>Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/users/active'>Active users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/administration'>Administration</Link>
          </li>
        </ul>
        }
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" onClick={ onSearchClick } type="text" placeholder="Search" />
        </form>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoged: state.auth.isLoged
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {
            dispatch(logoutUserAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
