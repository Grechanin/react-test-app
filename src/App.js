import React from 'react';
import HomePage from './pages/home/HomePage.jsx'
import Registration from './pages/registration/Registration.jsx';
import Login from './pages/login/Login.jsx';
import Administration from './pages/administration/Administration.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import AllUsers from './pages/users/AllUsers.jsx';
import ActiveUsers from './pages/users/ActiveUsers.jsx'
import UserInfo from './pages/users/UserInfo.jsx';
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/react-test-app' component={ HomePage } />
      <Route exact path='/registration' component={ Registration } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/administration' component={ Administration } />
      <Route exact path='/users' component={ AllUsers } />
      <Switch>
        <Route exact path='/users/active' component={ ActiveUsers } />
        <Route exact path='/users/:userId' component={ UserInfo } />
      </Switch>
    </div>
  );
}

export default App;
