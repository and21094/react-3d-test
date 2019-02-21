import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';
import logo from '../../logo.svg';

class Navigation extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Andres React 3D Test
        </h1>
        <div className="d-flex justify-content-center w-100 justify-content-around p-3">

        <NavLink to="/three">
          <button className="btn btn-primary"> 
            <i className="fas fa-cubes"></i> Three.js
          </button>
        </NavLink>
        <NavLink to="/information">
          <button className="btn btn-info">
            <i className="fas fa-info-circle"></i> Information
          </button>
        </NavLink>
        <NavLink to="/babylon">
          <button className="btn btn-primary"> 
            <i className="fas fa-cube"></i> Babylon.js
          </button>
        </NavLink>
        </div>
      </header>
    );
  }
}

export default Navigation;
