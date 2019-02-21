import React, { Component } from 'react'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

import './Three.css';
/**
 * THIS IS THE FIRST OPTIONAL COMPONENT OF THE TASK
 */
class three extends Component {

  constructor() {
    super()

    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
    this.state = {
      isMouseDown: false
    }

    this.stop = this.stop.bind(this);
    this.restart = this.restart.bind(this);
    
  }
  
  componentDidMount() {

    const width = this.stage.clientWidth;
    const height = this.stage.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // red
    geometry.faces[0].color.setHex(0xff0000);
    geometry.faces[1].color.setHex(0xff0000);
    // orange
    geometry.faces[2].color.setHex(0xff6c00);
    geometry.faces[3].color.setHex(0xff6c00);
    // blue
    geometry.faces[4].color.setHex(0x004dff);
    geometry.faces[5].color.setHex(0x004dff);
    // green
    geometry.faces[6].color.setHex(0x159200);
    geometry.faces[7].color.setHex(0x159200);
    // yellow
    geometry.faces[8].color.setHex(0xfff900);
    geometry.faces[9].color.setHex(0xfff900);


    const texture = new THREE.TextureLoader().load('https://image.flaticon.com/icons/png/512/20/20075.png');
    const material = new THREE.MeshBasicMaterial({ map: texture, color: '#fff', vertexColors: THREE.FaceColors });
    const cube = new THREE.Mesh( geometry, material );

    camera.position.z = 4;
    scene.add(cube);
    renderer.setClearColor('#fff');
    renderer.setSize(width, height);

    
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.cube = cube;
    
    this.stage.appendChild(this.renderer.domElement);
    new OrbitControls( camera, renderer.domElement );
    this.start();
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    this.setState({ isMouseDown: true});
  }

  restart() {
    this.setState({ isMouseDown: false});
  }

  animate() {
    // console.log(this.state.isMouseDown);
    if (!this.state.isMouseDown) {
      this.cube.rotation.x += 0.005;
      this.cube.rotation.y += 0.005;
    }

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }


  render() {
    return (
      <div>
        <h2>
          Three.js - Rubik Cube
        </h2>
        <p>
          use your mouse to rotate the cube.
        </p>
        <div onMouseDown={this.stop} onMouseUp={this.restart} style={{ width: '100%', height: '500px' }} ref={(stage) => { this.stage = stage }}></div>
      </div>
    )
  }
}

export default three
