import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './JoinForm.css';
import NavBar from '../../components/NavBar/NavBar';


class JoinForm extends Component {

    state = {
        formData: {
          days: ''
        }
      };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleJoinTrip(this.state.formData);
   this.props.history.push('/');
 };

 handleChange = e => {
   const formData = {
     ...this.state.formData,
     [e.target.name]: e.target.value,
   };
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity(),
   });
 };
 isFormInvalid() {
    return !(this.state.days);
  }

  render() {
    return (
      <>
      <NavBar
      user={this.props.user}
      handleLogout={this.props.handleLogout}
       />
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
       <div class="pageHead">
        <h1 class="title">Join This Trip</h1>
        </div>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="field">
          <label class="label">Days (required)</label>
            <input
              className="input"
              name="days"
              value={this.state.formData.days}
              onChange={this.handleChange}
              required
            />
          </div>
<button
            type="submit"
            className="button is-dark"
            disabled={this.state.invalidForm}
          >
            ADD TRIP 
          </button>
        </form>
      </div>
      <div class="column is-3"></div>
      </div>
      </>
    );
  }
}
export default JoinForm;


