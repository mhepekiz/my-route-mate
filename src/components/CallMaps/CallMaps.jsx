import React, { Component } from 'react';
import './CallMaps.css';

class CallMaps extends Component {


    render(props) {

      let mapLink = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDLBMQay-37XO38g0jbkyugVkkvpL05CwE&origin=${this.props.startPoint}&destination=${this.props.endPoint}`
        if(this.props.noMap=="no"){
            return( <>
            <iframe src={mapLink} height="315" width="100%"></iframe>
      </> ); 
        } else {
            return( <>
            <figure class="image is-4by3">
      <img src="https://exploreeasterneurope.co.uk/wp-content/uploads/2020/02/how-to-plan-motorcycle-trip-3.jpg" alt="Placeholder image" />
    </figure>
      </>);
        }


    }
}

export default CallMaps;

