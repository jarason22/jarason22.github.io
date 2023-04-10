import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r108/three.module.js";
// /import { init } from "./cesarCube.js"

import { init } from "./cesarImages.js";

init();

let cards = document.querySelectorAll(".card");

cards.forEach((c) => {
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
    img.style.transform = "";
    img.style.boxShadow = "0 5px 15px #363636AA";
  });

  c.addEventListener("mousemove", move);
});

const main = document.querySelector("main");

main.addEventListener("mousemove", (e) => {
  const arrow = document.querySelector("main.inactive .arrow-wrap");
  if (arrow) {
    arrow.style.transition = "0s";
    arrow.style.transform = `translateY(${
      e.clientY - window.innerHeight / 2
    }px)`;
  }
});

main.addEventListener("mouseleave", (e) => {
  const arrow = document.querySelector("main.inactive .arrow-wrap");
  if (arrow) {
    arrow.style.transform = `translateY(0px)`;
  }
});

main.addEventListener("click", (e) => {
  if (e.target === main) main.classList.toggle("inactive");
});

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
    ${-xWalk}px ${7 - yWalk}px 5px #1985A1
  `;

  spanText.style.textShadow = `
    ${-xWalk}px ${7 - yWalk}px 5px #E56399
  `;

  let img = e.currentTarget.querySelector(".imgBx");
  let isFlipped = document.querySelector(".card.is-flipped") ?? false;
  let col = isFlipped ? "E56399" : "1985A1";
  let bs = `
    ${-xWalk}px ${-yWalk}px 10px #363636, inset 0 0 5px #${col}, inset 0 0 10px #${col}
  `;
  img.style.boxShadow = bs;
  console.log(bs);
};

const transformElement = (e, c) => {
  let { clientX: mX, clientY: mY } = e;
  let { height: h, width: w, x, y } = c.getBoundingClientRect();
  let calcX = -(mY - y) / 15;
  let calcY = (mX - x) / 15;

  let img = e.currentTarget.querySelector(".imgBx");
  img.style.transform =
    "rotateX(" +
    calcX +
    "deg) " +
    "rotateY(" +
    calcY +
    "deg) translateX(-50%) translateZ(25px)";
};
