import React from 'react';
import './TripsPage.css';
import NavBar from '../../components/NavBar/NavBar';
import TripList from '../../components/TripList/TripList';


const TripsPage = (props) => {
  
    return (
      <div className="TripsPage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
    
    <>
    <div className="container">
      <div className="TripListPage-grid">
      {props.trips.map(trip => (
          <TripList trip={trip} key={trip._id}
          handleDeleteTrip={props.handleDeleteTrip}
          user={props.user}
          />
        ))}
      </div>
      </div>
    </>
</div>
    );
  
  };
  
  export default TripsPage;
