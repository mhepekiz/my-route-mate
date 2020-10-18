import React, { Component } from "react";
import { withRouter } from 'react-router';
import userService from '../../utils/userService';
import './JoinTripForm.css';

class JoinTripForm extends Component {
  
  state = {
    formData: {
      days: '',
      startPoint: '',
      endPoint: '',
      googleMaps: '',
      maxRiders: '',
    },
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

  render() {
    return (
      <>
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
       <div class="pageHead">
        <h1 class="title">Add New Trip</h1>
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
          
          <div className="form-group">
          <label class="label">Start Point (required)</label>
            <input
              className="input"
              name="startPoint"
              value={this.state.formData.startPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
          <label class="label">End Point (required)</label>
            <input
              className="input"
              name="endPoint"
              value={this.state.formData.endPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
          <label class="label">Short Description</label>
            <input
              className="input"
              name="shortDesc"
              value={this.state.formData.shortDesc}
              onChange={this.handleChange}
              />
          </div>
        

          <br /><button
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
export default withRouter(JoinTripForm);
