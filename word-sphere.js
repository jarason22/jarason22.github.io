import * as THREE from "./node_modules/three/build/three.module.js";
import "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js";

const texts = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "SWIFT",
  "MONGOOSE",
  "REACT",
  "PYTHON",
  "SASS",
  "DJANGO",
  "NODEJS",
  "SQL",
];

TagCloud(".sphere", texts, {
  radius: 2000,
  maxSpeed: "fast",
  initSpeed: "fast",
  direction: 135,
  keep: true,
});

var color = "#FF5733";
document.querySelector(".sphere").style.color = color;
