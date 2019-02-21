import React, { Component } from 'react';
import './Information.css';
/**
 * THIS IS THE REQUIRED COMPONENT OF THE TASK
 */
class Information extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>
            Three.js
          </h2>
          <p className="text-justify">
            Three.js is a cross-browser JavaScript library and Application Programming Interface (API)
            used to create and display animated 3D computer graphics in a web browser. Three.js uses WebGL.
            The source code is hosted in a repository on GitHub.
            <br/> <br/>
            Three.js allows the creation of Graphical Processing Unit (GPU)-accelerated 3D animations using the JavaScript language
            as part of a website without relying on proprietary browser plugins.[3][4] This is possible due to the advent of WebGL.
          </p>
          <img alt="" src ="https://crowdforge.io/uploads/logos/three.js.png/" />
        </div>
        <div className="col">
          <h2>
            Babylon.js
          </h2>
          <p className="text-justify">
            Babylon.js is a real time 3D engine using a JavaScript library for displaying 3D graphics in a web browser via HTML5.
            The source code is available on github and distributed under the Apache License 2.0.
            <br/> <br/>
            The source code is written in TypeScript and then compiled into a JavaScript version.
            The JavaScript version is available to end users via NPM or CDN who then code their projects in JavaScript accessing the engine's API.
            The Babylon.js 3D engine and user code is natively interpreted by all the web browser supporting the HTML5 standard and WebGL to undertake the 3D rendering.
          </p>
          <img alt="" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Logo-babylonjs.svg/1280px-Logo-babylonjs.svg.png" />
        </div>
      </div>
    );
  }
}

export default Information;