import React, {Component} from 'react';
import './App.css';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import TripsPage from '../../pages/TripsPage/TripsPage';
import LoginPage from '../LoginPage/LoginPage';




class App extends Component {
  
  constructor(){
    super();
    this.state = {
      user: userService.getUser()
    };
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }


  render() {
    return (

      <div>
      <Switch>
        <Route exact path='/' render={() =>
          <TripsPage
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        }/>
       <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            history={history}
          />
        }/>
      </Switch>
    </div>
    );
  }
}

export default App;