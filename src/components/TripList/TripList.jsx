import React from 'react';
import './TripList.css';
import JoinButton from '../JoinButton/JoinButton';
import CallMaps from '../CallMaps/CallMaps';
import DeleteEditButtons from '../DeleteEditButtons/DeleteEditButtons';

function TripList(props) { 
  
  let strDate = props.trip.startDate;
  let startDate = strDate.substring(0, 10);

  if (props.user) {
    return (
    <div class="card">
  <div class="card-image">
    <CallMaps 
    noMap={props.trip.noMap}
    startPoint={props.trip.startPoint}
    endPoint={props.trip.endPoint}/>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
        <img src={`http://my-route-mate.herokuapp.com/images/${props.trip.category}.png`}  alt="`${props.trip.category}`"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{props.trip.startPoint} - {props.trip.endPoint}</p>
        <p class="subtitle is-6"><b>{props.trip.category}</b></p>
      </div>
    </div>

    <div class="content">
     <b>Start Date :</b> {startDate}<br />
     <b>End Date   :</b> {props.trip.endDate}
     <br /><b>Short Description : </b>{props.trip.shortDesc}<br /><br />

     <JoinButton
  trip={props.trip}
  key={props.trip._id}
  riders={props.trip.maxRiders}
  />
     <DeleteEditButtons
     trip={props.trip} 
     key={props.trip._id}
     handleDeleteTrip={props.handleDeleteTrip}
     tripUser={props.trip.userid}
     user={props.user}
      />
     

    
   </div>
   <br /><div class="container">
  <div class="notification is-warning">
  <div>Need Hiking Ideas? <a href="http://thesublimest.herokuapp.com/" target="_blank">The Sublimest by SR</a></div>
    <div>Need Camping Ideas? <a href="https://campster-sei.herokuapp.com/login" target="_blank">Campster by CW</a></div>
  
  </div>
</div>
  </div>
    </div>
    );
  } else {
    let strDate = props.trip.startDate;
    let startDate = strDate.substring(0, 10);
    return( 
    
      <div class="card">
      <div class="card-image">
        <CallMaps 
        noMap={props.trip.noMap}
        startPoint={props.trip.startPoint}
        endPoint={props.trip.endPoint}/>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
            <img src={`${process.env.PUBLIC_URL}/images/${props.trip.category}.png`}  alt="{props.trip.category}"/>

            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.trip.startPoint} - {props.trip.endPoint}</p>
            <p class="subtitle is-6"><b>{props.trip.category}</b></p>
          </div>
        </div>
    
        <div class="content">
     <b>Start Date :</b> {startDate}<br />
     <b>End Date   :</b> {props.trip.endDate}
     <br /><b>Short Description : </b>{props.trip.shortDesc}<br /><br />

    <br /><div class="container">
  <div class="notification">
  <div>Need Hiking Ideas? <a href="http://thesublimest.herokuapp.com/" target="_blank">The Sublimest by SR</a></div>
    <div>Need Camping Ideas? <a href="https://campster-sei.herokuapp.com/login" target="_blank">Campster by CW</a></div>
  
  </div>
</div>
          </div>
  </div>
</div>     
            );
  }
  }
  

export default TripList;