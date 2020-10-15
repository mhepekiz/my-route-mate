import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DeleteEditButtons extends Component {
    render(props) {
      
            return( <>
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
 onClick={() => props.handleDeleteTrip(props.trip._id)}
>
 <b>DELETE</b>
</button> </>);
  }    
}

export default DeleteEditButtons;