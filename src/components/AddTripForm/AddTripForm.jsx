import React, { Component } from "react";
import { withRouter } from 'react-router';

class AddTripForm extends Component {
  state = {
    formData: {
      days: '',
      startDate: '',
      endDate: '',
      startPoint: '',
      endPoint: '',
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
        <h1>Add Trip</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Days (required)</label>
            <input
              className="form-control"
              name="days"
              value={this.state.formData.days}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Date (required)</label>
            <input type="date"
              className="form-control"
              name="startDate"
              value={this.state.formData.startDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date (required)</label>
            <input type="date"
              className="form-control"
              name="endDate"
              value={this.state.formData.endDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Point (required)</label>
            <input
              className="form-control"
              name="startPoint"
              value={this.state.formData.startPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Point (required)</label>
            <input
              className="form-control"
              name="endPoint"
              value={this.state.formData.endPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Max Riders (required)</label>
            <input
              className="form-control"
              name="maxRiders"
              value={this.state.formData.maxRiders}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Pillion</label>
            <input
              className="form-control"
              name="pillion"
              value={this.state.formData.pillion}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select className="form-control"
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
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD TRIP
          </button>
        </form>
      </>
    );
  }
}
export default withRouter(AddTripForm);
