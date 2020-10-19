import React from 'react';
import TripCard from '../../components/TripCard/TripCard';
import NavBar from '../../components/NavBar/NavBar';

function TripDetailPage(trip, props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
//   const trip = props.location.trip;
  return (

    <div className="TripsPage">
    <NavBar
      user={props.user}
      handleLogout={props.handleLogout}
    />
    <>
      <h1>Trip Details</h1>
      <TripCard
        key={trip._id}
        trip={trip}
      />
    </>
    </div>
  );
}
export default TripDetailPage;