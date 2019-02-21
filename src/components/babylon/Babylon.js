import React, { Component } from 'react';
import * as BABYLON from 'babylonjs'

import './Babylon.css';
/**
 * THIS IS THE SECOND OPTIONAL COMPONENT OF THE TASK
 */
class Babylon extends Component {

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  }

  setEngine = () => {
    this.engine = new BABYLON.Engine(this.stage);    
    this.stage.style.width = '60vw';
    this.stage.style.height = '500px';
    this.stage.width = 1920;
    this.stage.height = 1080;

  }

  setScene = () => {
    this.scene = new BABYLON.Scene(this.engine);
    
    this.scene.clearColor = new BABYLON.Color3(255, 255, 255);
  }
  
  setCamera = () => {
    
    this.camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, BABYLON.Vector3.Zero(), this.scene);
    this.camera.attachControl(this.stage, true);
    this.camera.useAutoRotationBehavior = true;
    this.camera.setTarget(BABYLON.Vector3.Zero());
    this.camera.lowerRadiusLimit = 3;
    this.camera.upperRadiusLimit = 20;
    this.camera.setPosition(new BABYLON.Vector3(-10, 20, -20));
    this.camera.radius = 3;
    
    this.scene.createDefaultCameraOrLight(this.camera);

  }


  loadModels = () => {

    let loader = new BABYLON.AssetsManager(this.scene);

    // Arguments: "ID", "Root URL", "URL Prefix", "Filename"
    let loadCubeModel = loader.addMeshTask("", "", "scenes/", "babylonJS_logo_v3.babylon");

    loadCubeModel.onSuccess = ( t ) => {

      this.engine.runRenderLoop(() => {
        this.scene.render(this.camera);
      });

    }

    loadCubeModel.onError = function (message, exception) {
        console.log(message, exception);
    }

    return loader;
  }
      
  componentDidMount() {
    this.setEngine();
    this.setScene();
    this.setCamera();
    this.loadModels().load();
    window.addEventListener('resize', this.onResizeWindow);
  }

  render() {
    return (
      <div>
        <h2>Babylon.js - Babylon Logo</h2>
        <p>
          use your mouse to rotate the cube.
        </p>
        <canvas className="scene" ref={ el => this.stage = el}></canvas>              
      </div>
    )
  }
}

export default Babylon;