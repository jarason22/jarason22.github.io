import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r108/three.module.js";
// /import { init } from "./cesarCube.js"

import { init } from "./cesarImages.js";

init();

const shadow = (e, c) => {
  let { clientX: x, clientY: y } = e;
  let { top: t, right: r, bottom: b, left: l } = c.getBoundingClientRect();
  let xCenter = (r - l) / 2 + l;
  let yCenter = (b - t) / 2 + t;

  let xWalk = Math.round((x - xCenter) / 15);
  let yWalk = Math.round((y - yCenter) / 15);

  let engText = e.currentTarget.querySelector(".eng");
  let spanText = e.currentTarget.querySelector(".span");

  engText.style.textShadow = `
    ${-xWalk}px ${-yWalk}px 10px #1985A1
  `;

  spanText.style.textShadow = `
    ${-xWalk}px ${-yWalk}px 10px #E56399
  `;

  let img = e.currentTarget.querySelector(".imgBx");
  img.style.boxShadow = `
    ${-xWalk}px ${-yWalk}px 10px #363636
  `;
};

const transformElement = (e, c) => {
  let { clientX: mX, clientY: mY } = e;
  let { height: h, width: w, x, y } = c.getBoundingClientRect();
  let calcX = -((mY) - y - h / 2) / 15;
  let calcY = (mX - x - w / 2) / 10;

  let img = e.currentTarget.querySelector(".imgBx");
  img.style.transform =
    "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg) translateX(-50%) translateZ(100px)";
};

var cards = document.querySelectorAll(".card");

[...cards].forEach((c) => {
  const move = (e) => {
    shadow(e, c);
    transformElement(e, c);
  };

  c.addEventListener("click", function () {
    c.classList.toggle("is-flipped");
  });

  c.addEventListener("mouseleave", function () {
    c.classList.remove("is-flipped");

    let img = c.querySelector(".imgBx");
    img.style.transform = "translateX(-50%)";
  });

  c.addEventListener("mousemove", move);
});
