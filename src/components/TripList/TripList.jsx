import React from 'react';
import {Link} from 'react-router-dom';
import './TripList.css';
import JoinButton from '../JoinButton/JoinButton';


function TripList(props) { 
    return (



      <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
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
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <Link
 className='button is-dark is-small'
 to={{
   pathname: '/edit',
   state: {trip: props.trip}
 }}
>
 <b>EDIT</b>
</Link>&nbsp;&nbsp;<button
 className="button is-danger is-small"
 onClick={() => props.handleDeleteTrip(props.trip._id)}
>
 <b>DELETE</b>
</button>&nbsp;&nbsp;&nbsp;&nbsp;
<JoinButton
  riders={props.trip.maxRiders}
  />

    </div>
  </div>
</div>     
    );
  }
  

export default TripList;