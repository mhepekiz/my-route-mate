import React, { Component } from 'react';

class CallMaps extends Component {


    render(props) {
        if(this.props.routeMap){
            return( <>
     <iframe src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyDLBMQay-37XO38g0jbkyugVkkvpL05CwE&origin=${this.props.startPoint}&destination=${this.props.endPoint}" height="370" width="100%"></iframe>
      </> ); 
        } else {
            return( <>
            <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
      </>);
        }


    }
}

export default CallMaps;

