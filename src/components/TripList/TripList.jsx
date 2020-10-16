import React from 'react';
import './TripList.css';
import JoinButton from '../JoinButton/JoinButton';
import CallMaps from '../CallMaps/CallMaps';
import DeleteEditButtons from '../DeleteEditButtons/DeleteEditButtons';

function TripList(props) { 
  
  if (props.user) {
    return (
    <div class="card">
  <div class="card-image">
    <CallMaps 
    routeMap={props.trip.googleMaps}
    startPoint={props.trip.startPoint}
    endPoint={props.trip.endPoint}/>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{props.trip.startPoint} - {props.trip.endPoint}</p>
        <p class="subtitle is-6"><b>{props.trip.category}</b></p>
      </div>
    </div>

    <div class="content">
     <b>Start Date :</b> {props.trip.startDate}<br />
     <b>End Date   :</b> {props.trip.endDate}
      <br />
     <DeleteEditButtons
     trip={props.trip} 
     key={props.trip._id}
     handleDeleteTrip={props.handleDeleteTrip}
     tripUser={props.trip.userid}
     user={props.user}
      />
     &nbsp;&nbsp;&nbsp;&nbsp;
<JoinButton
  riders={props.trip.maxRiders}
  />

    </div>
  </div>
</div>     
    );
  } else {
    return( 
    
      <div class="card">
      <div class="card-image">
        <CallMaps 
        routeMap={props.trip.googleMaps}
        startPoint={props.trip.startPoint}
        endPoint={props.trip.endPoint}/>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.trip.startPoint} - {props.trip.endPoint}</p>
            <p class="subtitle is-6"><b>{props.trip.category}</b></p>
          </div>
        </div>
    
        <div class="content">
         <b>Start Date :</b> {props.trip.startDate}<br />
         <b>End Date   :</b> {props.trip.endDate}
          <br />
          </div>
  </div>
</div>     
            );
  }
  }
  

export default TripList;