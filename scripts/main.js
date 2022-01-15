const carousel = document.querySelector(".carousel");
const container = document.querySelector(".container");

const viewCheckbox = document.querySelector("#view");
viewCheckbox.checked = "";

let currentAngle = 0;
let isMouseDown = false;
let rotateFn = "rotateY";
let isVertical = false;

viewCheckbox.addEventListener("change", (e) => {
  isVertical = e.currentTarget.checked;
  rotateView(currentAngle);
});

const rotateView = (angle) => {
  if (isVertical) {
    carousel.style.transform = `perspective(1000px) ${rotateFn}(${
      angle || 0
    }deg) rotateX(90deg)`;
  } else {
    carousel.style.transform = `perspective(1000px) ${rotateFn}(${
      angle || 0
    }deg)`;
  }
  currentAngle = angle;
};

container.onmousemove = function (e) {
  if (isMouseDown) {
    rotateView(e.clientX);
  }
};

container.onmousedown = function (e) {
  isMouseDown = true;
};
container.onmouseup = function (e) {
  isMouseDown = false;
};
