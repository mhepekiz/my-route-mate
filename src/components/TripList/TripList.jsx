import React from 'react';
import {Link} from 'react-router-dom';


function TripList(props) { 
    return (
      <div className='panel panel-default'>
        <div className="panel-heading">
          <h3 className='panel-title'>{props.trip.startPoint} - {props.trip.endPoint} - {props.trip._id}</h3>
          <Link
 className='button is-dark is-small'
 to={{
   pathname: '/edit',
   state: {trip: props.trip}
 }}
>
 <b>EDIT</b>
</Link>

&nbsp;&nbsp;<button
 className="button is-danger is-small"
 onClick={() => props.handleDeleteTrip(props.trip._id)}
>
 <b>DELETE</b>
</button>
        </div>
       
      </div>
    );
  }
  

export default TripList;