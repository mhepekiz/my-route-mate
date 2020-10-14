import React from 'react';

function TripList(props) { 
    return (
      <div className='panel panel-default'>
        <div className="panel-heading">
          <h3 className='panel-title'>{props.motorcycle.startPoint} - {props.motorcycle.endPoint}</h3>
        </div>
       
      </div>
    );
  }
  

export default TripList;