import React, { Component } from "react";
import { withRouter } from 'react-router';
import './AddTripForm.css';
import NavBar from '../../components/NavBar/NavBar';


class AddTripForm extends Component {
  
  state = {
    formData: {
      days: '',
      startDate: '',
      endDate: '',
      startPoint: '',
      endPoint: '',
      shortDesc: '',
      maxRiders: '',
      pillion: 'yes',
      category: '',
      allDetails: ''
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
      <NavBar
      user={this.props.user}
      handleLogout={this.props.handleLogout}
       />
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
       <div class="pageHead">
        <h1 class="title">Add New Trip by {this.props.user.name}</h1>
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
          <label class="label">Start Date (required)</label>
            <input type="date"
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
          <label class="label">Don't Create Map <input
              className="checkbox"
              type="checkbox"
              name="noMap"
              value={this.state.formData.noMap}
              onChange={this.handleChange}
              />
              </label><br />
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
              <option value="">Select</option>
              <option value="racing">Racing</option>
              <option value="touring">Touring</option>
              <option value="enduro">Enduro</option>
              <option value="off-road">Off-Road</option>
              <option value="chopper">Chopper</option>
          </select>
          </div>
          </div>
          <div class="field">
              <label class="label">All Details</label>
              
              <textarea 
              name="allDetails"
              value={this.state.formData.allDetails}
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
