import React, {Component} from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          myRouteMate
          <nav>
            <NavLink exact to='/'>Routes List</NavLink>
          </nav>
        </header>
        <main>
         
        </main>
      </div>
    );
  }
}

export default App;