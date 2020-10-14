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
        <div className="table-container">
  <table className="table">
    <tr><td>
    {props.trips.map(trip => (
          <TripList trip={trip} key={trip._id}
          handleDeleteTrip={props.handleDeleteTrip} />
        ))}
        </td></tr>
        </table>
</div>
</div>
    );
  
  };
  
  export default TripsPage;
