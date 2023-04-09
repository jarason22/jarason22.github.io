import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r108/three.module.js";
// /import { init } from "./cesarCube.js"

import { init } from "./cesarImages.js"

init();

var cards = document.querySelectorAll('.cardff');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

var cardx = document.querySelectorAll('.card');

[...cardx].forEach((c)=>{
  c.addEventListener( 'click', function() {
    c.classList.toggle('is-flipped');
  });
});