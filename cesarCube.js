import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r108/three.module.js";

var camera, scene, renderer;
var mesh,
  allCubes = new THREE.Object3D();
var dimension = 20;

var loader = new THREE.TextureLoader();
var image1 = loader.load("./src/cesarPics/img1.jpg");
var image2 = loader.load("./src/cesarPics/img2.jpg");
var image3 = loader.load("./src/cesarPics/img3.jpg");
var image4 = loader.load("./src/cesarPics/img4.jpg");
var image5 = loader.load("./src/cesarPics/img5.jpg");
var image6 = loader.load("./src/cesarPics/img6.jpg");

export function init() {
  camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 180;
  camera.position.x = 10;

  scene = new THREE.Scene();

  //   for (var i = 0; i < 5; i++) {
  //     for (var j = 0; j < 4; j++) {
  //       for (var k = 0; k < 3; k++) {
  //         var x = i * dimension + 5 * i,
  //           y = j * dimension + 5 * j,
  //           z = k * dimension + 5 * k;
  //         newCube(x, y, z);
  //       }
  //     }
  //   }

  newCube(0, 0, 0);

  scene.add(allCubes);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //

  window.addEventListener("resize", onWindowResize, false);

  animate();
}

function newCube(x, y, z) {
  var cubeMaterials = [
    new THREE.MeshBasicMaterial({ map: image1 }),
    new THREE.MeshBasicMaterial({ map: image2 }),
    new THREE.MeshBasicMaterial({ map: image3 }),
    new THREE.MeshBasicMaterial({ map: image4 }),
    new THREE.MeshBasicMaterial({ map: image5 }),
    new THREE.MeshBasicMaterial({ map: image6 }),
  ];
  cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterials);

  var cubeGeometry = new THREE.BoxGeometry(dimension, dimension, dimension);
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterials);

  cube.position.set(x, y, z);

  allCubes.add(cube);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  allCubes.rotation.x += 0.002;
  allCubes.rotation.y += 0.009;
  allCubes.rotation.z += 0.003;

  renderer.render(scene, camera);
}
