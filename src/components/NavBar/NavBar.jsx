import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>

<section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-2"> <img class="logo" src="myroute.png"/></div>
        <div class="column is-10"> <h2 class="subtitle">
        <b>|</b> WELCOME, <b>{props.user.name}</b>

      </h2></div>
      </div>
    </div>
  </div>
</section>


<section class="hero is-dark">
  <div class="hero-body">
    <div class="container">
      <h4 class="is-h4">
        <a class="menu-link" href="/addtrip">ADD NEW TRIP</a> &nbsp;&nbsp; | &nbsp;&nbsp;<a class="menu-link" href="#">MY PROFILE</a> &nbsp;&nbsp; | &nbsp;&nbsp; <a class="menu-link" href="#" onClick={props.handleLogout}>LOGOUT</a>
      </h4>
    </div>
  </div>
</section>


    </div>
    :
    <div>
      
<section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        myRouteMate
      </h1>
    </div>
  </div>
</section>


<section class="hero is-dark">

<div class="container">
      <div class="columns">
        <div class="column is-2"> <img class="logo" src="myroute.png"/></div>
        <div class="column is-10"> <h2 class="subtitle">
        <b>|</b> <h4 class="is-h4">
        <a class="menu-link" href="/signup">SIGNUP</a> &nbsp;&nbsp; | &nbsp;&nbsp;<a class="menu-link" href="/login">LOGIN</a> &nbsp;&nbsp; | 
      </h4>

     </div>
      </div>
    </div>
  </div>
</section>


    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;