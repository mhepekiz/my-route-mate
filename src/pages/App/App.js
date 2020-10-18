import React, {Component} from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import * as tripAPI from "../../utils/tripService";
import userService from '../../utils/userService';
import TripsPage from '../../pages/TripsPage/TripsPage';
import LoginPage from '../LoginPage/LoginPage';
import AddTripPage from '../AddTripPage/AddTripPage';
import EditTripPage from '../EditTripPage/EditTripPage';

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
        trips: [...state.trips, newTrp],
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


  handleUpdateTrip = async updatedTrpData => {
    const updatedTrip = await tripAPI.update(updatedTrpData);
    const newTripsArray = this.state.trips.map(trip => 
      trip._id === updatedTrip._id ? updatedTrip : trip
    );
    this.setState(
      {trips: newTripsArray},
      () => this.props.history.push('/')
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
          <Route exact path='/addtrip' render={({ history }) => (
            userService.getUser() ?
          <AddTripPage
          history={history}
          thisUser={this.state.user}
          handleAddTrip={this.handleAddTrip}
            /> :
          <Redirect to='/login' />
          )}
        />

      
        <Route exact path='/edit' render={({ location }) => (
          userService.getUser() ?
          <EditTripPage
          handleUpdateTrip={this.handleUpdateTrip}
          location={location}
            /> :
            <Redirect to='/login' />
            )}
          />
        </Switch>

    </div>
    );
  }
}

export default App;