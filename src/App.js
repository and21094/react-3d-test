import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Navigation from './components/navigation/Navigation'
import Information from './components/information/Information'
import Three from './components/three/Three'
import Babylon from './components/babylon/Babylon'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container-fluid p-3">
            <Route path="/" component={Information} exact/>
            <Route path="/information" component={Information}/>
            <Route path="/three" component={Three}/>
            <Route path="/babylon" component={Babylon}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
