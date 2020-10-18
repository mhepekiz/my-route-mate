import React, { Component } from "react";
import { withRouter } from 'react-router';
import userService from '../../utils/userService';
import './AddTripForm.css';

class AddTripForm extends Component {
  
  state = {
    formData: {
      days: '',
      startDate: '',
      endDate: '',
      startPoint: '',
      endPoint: '',
      googleMaps: '',
      maxRiders: '',
      pillion: 'yes',
      category: ''
    },
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTrip(this.state.formData);
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
          <label class="label">Start Date Time (required)</label>
            <input type="datetime-local"
              className="input"
              name="startDate"
              value={this.state.formData.startDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
          <label class="label">End Date (required)</label>
            <input type="date"
              className="input"
              name="endDate"
              value={this.state.formData.endDate}
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
          <div className="form-group">
          <label class="label">Max Riders (required)</label>
            <input
              className="input"
              name="maxRiders"
              value={this.state.formData.maxRiders}
              onChange={this.handleChange}
              required
            />
          </div>
            <div class="field">
              <label class="label">Pillion Rider</label>
              <div class="select">
              <select
              name="pillion"
              value={this.state.formData.pillion}
              onChange={this.handleChange}
              required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            </div>
         
            <div class="field">
              <label class="label">Trip Category</label>
              <div class="select">
              <select
              name="category"
            value={this.state.formData.category}
            onChange={this.handleChange}
            required
            >
              <option value="Racing">Racing</option>
              <option value="Touring">Touring</option>
              <option value="Enduro">Enduro</option>
              <option value="Off-Road">Off-Road</option>
          </select>
          </div>
          </div>
          <div class="field">
              <label class="label">All Details</label>
              
              <textarea 
              name="alldetails"
              value={this.state.formData.category}
              onChange={this.handleChange}
              class="textarea" 
              rows="10" 
              width="300"
              placeholder="Meeting point, stops..."></textarea>
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
export default withRouter(AddTripForm);
