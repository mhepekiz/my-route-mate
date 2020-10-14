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

        <h1>Add Trip</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Days (required)</label>
            <input
              className="input"
              name="days"
              value={this.state.formData.days}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Date (required)</label>
            <input type="date"
              className="input"
              name="startDate"
              value={this.state.formData.startDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date (required)</label>
            <input type="date"
              className="input"
              name="endDate"
              value={this.state.formData.endDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Point (required)</label>
            <input
              className="input"
              name="startPoint"
              value={this.state.formData.startPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Point (required)</label>
            <input
              className="input"
              name="endPoint"
              value={this.state.formData.endPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Google Maps Route Link (Copy from address bar)</label>
            <input
              className="input"
              name="googleMaps"
              value={this.state.formData.googleMaps}
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label>Max Riders (required)</label>
            <input
              className="input"
              name="maxRiders"
              value={this.state.formData.maxRiders}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Pillion</label>
            <input
              className="input"
              name="pillion"
              value={this.state.formData.pillion}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select className="select"
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