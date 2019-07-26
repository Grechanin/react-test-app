import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUsers, isActiveToggle } from '../../redux/users-reduser.js';
import UsersTable from '../../components/table/UsersTable.jsx';


class ActiveUsers extends React.Component {
  componentDidMount(){
    if (this.props.users.length ===0){
      this.props.getUsers();
    }
  }
  render() {
    document.title = "Active users";
    return (
      parseInt(!this.props.isLoged) ?
        <Redirect to='/' />
        :
        <div className='container'>
          <h1 className='text-center mb-3 mt-3'>Users</h1>
          <UsersTable
            activeUsers data={ this.props.users.filter(el => el.isActive) }
            activeColums={ this.props.activeColums }
            columsColors={ this.props.columsColors }
            onCheckboxChange={ this.props.isActiveToggle } />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isLoged: state.auth.isLoged,
    activeColums: state.administration.activeColums,
    columsColors: state.administration.columsColors
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        },
        isActiveToggle: (userId) => {
            dispatch(isActiveToggle(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUsers);
