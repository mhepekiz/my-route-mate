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
      addtrip: [],
      history: [],
      trips: []
    };
  }
  async componentDidMount() {
    const trips = await tripAPI.getAll();
    this.setState({trips});
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
        trip: [...state.trip, newTrp],
      }),
      () => this.props.history.push("/")
    );
  };


  handleDeleteTrip = async id => {
    await tripAPI.deleteOne(id);
    this.setState(state => ({
      trips: this.state.trips.filter(p => p._id !== id)
    }), () => this.props.history.push('/')
    );
  }



  render() {
    return (

      <div>
        <Switch>
          
        <Route exact path='/' render={() =>
          <TripsPage
            user={this.state.user}
            trips={this.state.trips}
            handleLogout={this.handleLogout}
            handleDeleteTrip={this.handleDeleteTrip}
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