import React, { Component } from 'react';
import AddTripForm from '../../components/AddTripForm/AddTripForm';
import './AddTripPage.css';




class AddTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='AddTripPage'>
        <AddTripForm {...this.props}
        user={this.props.user}
        updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default AddTripPage;