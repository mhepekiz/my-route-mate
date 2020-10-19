import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './EditUserPage.css';

class SignupForm extends Component {

  state = {
   
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.update(this.state);
      this.props.handleUpdateUser();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.username && this.state.name && this.state.phone && this.state.email && this.state.cyclebrand  && this.state.cyclemodel && this.state.category && this.state.rideyears && this.state.detailedinfo);
  }

  render() {
    return (
        <div>
        <div class="columns">
        <div class="column is-4"></div>
        <div class="column is-4">
       <div class="pageHead">
        <h1 class="title">Signup</h1>
        </div>

        <form className="form-horizontal" onSubmit={this.handleSubmit} >

        <div className="field">
          <label class="label">UserName (required)</label>
            <input
              className="input"
              name="username"
              value={this.state.username} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
          <label class="label">Name (required)</label>
            <input
              className="input"
              name="name"
              value={this.state.name} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
          <label class="label">Phone (required)</label>
            <input
              className="input"
              name="phone"
              value={this.state.phone} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
          <label class="label">Email (required)</label>
            <input
              className="input"
              name="email"
              value={this.state.email} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
          <label class="label">Motorcycle Brand</label>
            <input
              className="input"
              name="cyclebrand"
              value={this.state.cyclebrand} 
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
          <label class="label">Motorcycle Model</label>
            <input
              className="input"
              name="cyclemodel"
              value={this.state.cyclemodel} 
              onChange={this.handleChange}
            />
          </div>
          <div class="field">
              <label class="label">Bike Category</label>
              <div class="select">
              <select
              name="category"
            value={this.state.category}
            onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value="Racing">Racing</option>
              <option value="Touring">Touring</option>
              <option value="Enduro">Enduro</option>
              <option value="Off-Road">Off-Road</option>
          </select>
          </div>
          </div>

          <div className="field">
          <label class="label">Ride Experience (Years)</label>
            <input
              className="input"
              name="rideyears"
              value={this.state.rideyears} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
          <label class="label">Detail </label>
            <input
              className="input"
              name="detailedinfo"
              value={this.state.detailedinfo} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
          <label class="label">Password (required)</label>
            <input
              class="input"
              type="password"
              name="password"
              value={this.state.password} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
          <label class="label">Confirm Password (required)</label>
            <input
            class="input"
              type="password"
              name="passwordConf"
              value={this.state.passwordConf} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
            <button
            type="submit"
            className="button is-dark"
            disabled={this.isFormInvalid()}
          >
            <b>SIGN UP</b>
          </button>
              &nbsp;&nbsp;
              <Link to='/' class="button is-warning"><b>CANCEL</b></Link>
            </div>
          </div>
        </form>
        </div>
      <div class="column is-4"></div>
      </div>
      </div>
    );
  }
}

export default SignupForm;


