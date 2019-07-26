import React from 'react';
import { connect } from "react-redux";
import { getUsers, getUserInfo } from '../../redux/users-reduser.js'


 class UserInfo extends React.Component {

    componentDidMount(){
        if (this.props.users.length ===0){
          this.props.getUsers();
        }
        const { match: { params } } = this.props;
        this.props.getUserInfo(params.userId);
    }

    render() {
        if (this.props.userInfo){
            const { name, surname, age, isActive } = this.props.userInfo;
            document.title = `${name} info`;

            return (
            <div className="container">
                <h1 className='text-center mb-3 mt-3' >User info</h1>
                <p className='text-center' >Name: { name }</p>
                <p className='text-center' >Surname: { surname }</p>
                <p className='text-center' >Age: { age }</p>
                <p className='text-center' >Is active: { isActive ? "Active" : "Not active" }</p>
            </div>
            )
        }
        document.title = 'No user';
        return <p className='text-center mb-3 mt-3' >There is no user at this url</p>
    }
 }

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    userInfo: state.usersPage.userInfo
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        },
        getUserInfo: (userId) => {
            dispatch(getUserInfo(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
