import React from 'react';
import {Link} from 'react-router-dom';

function MotorcycleListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{props.motorcycle.startPoint} - {props.motorcycle.endPoint}</h3>
      </div>
      <div className='panel-footer PuppyListItem-action-panel'>
      <Link
 className='btn btn-xs btn-info'
 to={{
   pathname: '/details',
   state: {motorcycle: props.motorcycle}
 }}
>
 DETAILS
</Link>

<button
 className="btn btn-xs btn-danger margin-left-10"
 onClick={() => props.handleDeleteMotorcycle(props.motorcycle._id)}
>
 DELETE
</button>

<Link
 className='btn btn-xs btn-warning'
 to={{
   pathname: '/edit',
   state: {motorcycle: props.motorcycle}
 }}
>
 EDIT
</Link>

      </div>
    </div>
  );
}

export default MotorcycleListItem;