import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import * as tripAPI from "../../utils/tripService";
import userService from '../../utils/userService';
import TripsPage from '../../pages/TripsPage/TripsPage';
import LoginPage from '../LoginPage/LoginPage';
import AddTripPage from '../AddTripPage/AddTripPage';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      user: userService.getUser(),
      motorcycles: []
    };
  }
  async componentDidMount() {
    const motorcycles = await tripAPI.getAll();
    this.setState({motorcycles});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleAddTrip = async newTrpData => {
    const newTrp = await tripAPI.create(newTrpData);
    this.setState(
      state => ({
        addtrip: [...state.addtrip, newTrp],
      }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push("/home")
    );
  };

  render() {
    return (

      <div>
        <Switch>
          
        <Route exact path='/' render={() =>
          <TripsPage
            user={this.state.user}
            motorcycles={this.state.motorcycles}
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
          <Route exact path='/addtrip' render={({ history }) => 
          <AddTripPage
          history={history}
          handleAddTrip={this.handleAddTrip}
            /> }
        />
        </Switch>

    </div>
    );
  }
}

export default App;