let timer;
let time = 1000;

let leftOffset = 0;
let topOffset = 0;

const maxOffset = 200;

let right = false;
let bottom = false;

const box = document.getElementById("box");

function moveBox() {
  box.style.left = leftOffset + "px";
  box.style.top = topOffset + "px";

  //   if (leftOffset < maxOffset) {
  //     leftOffset += 30;
  //     box.style.left = leftOffset + "px";
  //     //right = false;
  //   } else {
  //     right = true;
  //   }

  if (leftOffset > maxOffset) {
    right = true;
  } else if (leftOffset == 0) {
    right = false;
  }

  if (topOffset > maxOffset) {
    bottom = true;
  } else if (topOffset == 0) {
    bottom = false;
  }

  if (bottom == false && right == false) {
    topOffset += 30;
  }

  if (bottom == true && right == false) {
    leftOffset += 30;
  }

  if (bottom == true && right == true) {
    topOffset -= 30;
  }

  if (bottom == false && right == true) {
    leftOffset -= 30;
  }
}

function show() {
  alert(box.innerHTML);
}

function speed() {
  time -= 90;
  box.innerHTML = time;
  clearInterval(timer);
  timer = setInterval(moveBox, time);
}

box.addEventListener("click", speed);

timer = setInterval(moveBox, time);
