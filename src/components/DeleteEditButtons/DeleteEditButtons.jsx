import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class DeleteEditButtons extends Component {

    render() {
      return (
        <div>
      {(() => {
        if ((this.props.user._id === this.props.tripUser) || (this.props.user.admin==="yes")) {
    
            return( 
              <>
            <Link
            className='button is-dark is-small'
            to={{
             pathname: '/edit',
             state: {trip: this.props.trip}
            }}
            >
            <b>EDIT</b>
            </Link>&nbsp;&nbsp;<button
            className="button is-danger is-small"
            onClick={() => this.props.handleDeleteTrip(this.props.trip._id)}
            >
            <b> DELETE </b>
            </button>
            </>
            );
         
        } else {
          return(<div><br /></div>);
        }
      })()}
    </div>
  )
} }
    


export default DeleteEditButtons;