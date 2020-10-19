import React from 'react';
import {Link} from 'react-router-dom';


function TripCard(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{props.trip.startPoint}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>End Point</dt>
          <dd>{props.trip.endPoint}</dd>
          <dt>Days</dt>
          <dd>{props.trip.days}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO TRIPS</Link>
      </div>
    </div>
  );
}

export default TripCard;