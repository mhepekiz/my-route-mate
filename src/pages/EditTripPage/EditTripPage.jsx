import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import './EditTripPage.css';
import NavBar from '../../components/NavBar/NavBar';

class EditTripPage extends Component {
 state = {
   invalidForm: false,
   formData: this.props.location.state.trip
 };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleUpdateTrip(this.state.formData);
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 render() {
    return (
        <div className="TripsPage">
        <NavBar
         
        />
      <>
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">

        <div class="pageHead">
    <h1 class="title">Edit Trip</h1>
        </div>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
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
              value={this.state.formData.alldetails}
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
            UPDATE TRIP
          </button>
        </form>
       </div>
      <div class="column is-3"></div>
      </div>
      </>
        </div>
    );
  }
}
export default EditTripPage;