import React, { Component } from 'react';

class JoinButton extends Component {
    render(props) {
        if(this.props.riders > 0){
            return( <>
            <button
                className="button is-warning is-small is-pulled-right">
                <b>{this.props.riders} Riders to GO</b>
                </button>
                <button
                className="button is-dark is-small is-pulled-right">
                <b><span class="heart">&#10084;</span> Join</b>
                </button>
      </> ); 
        } else {
            return( <>
            <button
                className="button is-dark is-small is-pulled-right">
                <b>All Riders Are Ready for This Ride!</b>
                </button>
      </>);
        }


    }
}

export default JoinButton;