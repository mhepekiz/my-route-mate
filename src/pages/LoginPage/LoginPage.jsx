import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    // Implement in an elegant way
    this.setState({
      // Using Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Do not alert in your projects,
      // show a modal or some UI instead
      alert('Invalid login');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <NavBar />
        <>
      <div class="columns">
        <div class="column is-4"></div>
        <div class="column is-4">
          <div className="container">
          <h4 className="is-h4">Login</h4></div>
         <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="input" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="input" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <br/><br /><button className="button is-dark">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link className="button is-warning" to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        </div>
      <div class="column is-4"></div>
      </div>
      </>
      </div>
      );
  }
}

export default LoginPage;
