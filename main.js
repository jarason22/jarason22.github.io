import * as THREE from './node_modules/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const light = new THREE.PointLight( 0xFFFFFF, 1, 1000 );
const geometry = new THREE.SphereGeometry( 10, 15, 15 );
const material = new THREE.MeshBasicMaterial( { color: 0xFC6B0A } );
const sphere = new THREE.Mesh( geometry, material );
light.position.set( 0, 0, 0 );
scene.add( light );
scene.add( sphere );
camera.position.z = 30;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    }
animate();
