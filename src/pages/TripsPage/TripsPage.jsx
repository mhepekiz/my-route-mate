import React from 'react';
import './TripsPage.css';
import NavBar from '../../components/NavBar/NavBar';


const TripsPage = (props) => {
    return (
      <div className="TripsPage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
      </div>
    );
  
  };
  
  export default TripsPage;
