import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class DeleteEditButtons extends Component {

  
    render() {
      //let currentUser = userService.getUser()._id
      if (this.props.user._id === this.props.tripUser) {
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
          } else { return(<div></div>)}
          
        }
    }    


export default DeleteEditButtons;