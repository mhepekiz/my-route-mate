import React from 'react';
import {Link} from 'react-router-dom';


function TripList(props) { 
    return (
      <div className='panel panel-default'>
        <div className="panel-heading">
          <h3 className='panel-title'>{props.motorcycle.startPoint} - {props.motorcycle.endPoint} - {props.motorcycle._id}</h3>
          <button
 className="btn btn-xs btn-danger margin-left-10"
 onClick={() => props.handleDeleteTrip(props.motorcycle._id)}
>
 DELETE
</button>
        </div>
       
      </div>
    );
  }
  

export default TripList;