let timer;
let time = 1000;
let finishTime = 10000;

let leftOffset = 0;
let topOffset = 0;

const maxOffset = 200;

let right = false;
let bottom = false;

let count = 0;

const box = document.getElementById("box");

box.innerHTML = `${time} ${count}`;

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
  count++;
  box.innerHTML = `${time} ${count}`;
  clearInterval(timer);
  timer = setInterval(moveBox, time);
}

function finish() {
    // clearInterval
    // if (){ //count < 10 = lose

    // }
    // else{

    // }    

}

box.addEventListener("click", speed);

timer = setInterval(moveBox, time);

setTimeout(finish, finishTime);
