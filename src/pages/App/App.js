import React, {Component} from 'react';
import './App.css';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';


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
      <div className="App">
        <header className="App-header">
          myRouteMate
          <nav>
            <NavLink exact to='/' user={this.state.user}>Routes List</NavLink>
            <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          </nav>
        </header>
        <main>
         
        </main>
      </div>
    );
  }
}

export default App;