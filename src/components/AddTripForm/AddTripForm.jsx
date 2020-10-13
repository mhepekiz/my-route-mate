import React, { Component } from "react";

class AddTripForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: "",
      breed: "Mixed",
      age: "0",
    },
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTrip(this.state.formData);
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
            <input
              className="form-control"
              name="startdate"
              value={this.state.formData.startdate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date (required)</label>
            <input
              className="form-control"
              name="enddate"
              value={this.state.formData.enddate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Point (required)</label>
            <input
              className="form-control"
              name="startpoint"
              value={this.state.formData.startpoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Point (required)</label>
            <input
              className="form-control"
              name="endpoint"
              value={this.state.formData.endpoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Max Riders (required)</label>
            <input
              className="form-control"
              name="maxriders"
              value={this.state.formData.maxriders}
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
export default AddTripForm;
