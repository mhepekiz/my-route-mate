import React, { Component } from 'react';
import JoinForm from '../../components/JoinForm/JoinForm';
import './JoinTripPage.css';


class JoinTripPage extends Component {
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
        <JoinForm {...this.props}
        user={this.props.user}
        trip={this.state.trip}
        handleLogout={this.props.handleLogout}
        updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default JoinTripPage;