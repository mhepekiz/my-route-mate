import React from 'react';
import './NavBar.css';

const NavBar = (props) => {

  
  let nav = props.user ?
    <div>

<section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-2"> <a href="/"><img class="logo" src="myroute.png"/></a></div>
        <div class="column is-10"> <h2 class="subtitle">
        <b>|</b> WELCOME, <b>{props.user.name} {props.user.admin}</b>

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
      <div class="columns">
        <div class="column is-2"> <a href="/"><img class="logo" src="myroute.png"/></a></div>
        <div class="column is-10"> <h2 class="subtitle">
        <b>|</b> Find Your Best Motorcycle Route Mate

      </h2></div>
      </div>
    </div>
  </div>
</section>


<section class="hero is-dark">

  
  <div class="hero-body">
    <div class="container">
      <h4 class="is-h4">
      <a class="menu-link" href="/addtrip">ADD NEW ROUTE</a> &nbsp;&nbsp; | &nbsp;&nbsp;<a class="menu-link" href="/signup">SIGNUP</a> &nbsp;&nbsp; | &nbsp;&nbsp;<a class="menu-link" href="/login">LOGIN</a> &nbsp;&nbsp; | 
      </h4>
    </div>
  </div>
</section>


    </div>;


return (
  <div>
    {(() => {
      if (props.user) {
        return (
          <div>
          {(() => {
            if (props.user.admin==="yes") {
              return (
                <div><nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  ADMIN MENU BAR
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              </nav>
              {nav}</div>
              )
            } else if (props.user.admin==="no") {
              return (
                <div>{nav}</div>
              )
            } 
          })()}
        </div>
        )
      } else {
        return (
          <div className='NavBar'>
          {nav}
        </div>
        )
      } 
    })()}
  </div>
)


};

export default NavBar;