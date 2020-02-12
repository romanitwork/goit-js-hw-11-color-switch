"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];


let interval;
const btnStart = document.querySelector("[data-action='start']");
const btnStop = document.querySelector("[data-action='stop']");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btnStart.addEventListener("click", startChange);
btnStop.addEventListener("click", stopChange);

function bgChange() {
  const color = randomIntegerFromInterval(0, colors.length);
  document.body.style.backgroundColor = `${colors[color]}`;
}
function startChange(e) {
  btnStart.removeEventListener("click", startChange);
  interval = setInterval(bgChange, 1000);
  btnStart.disabled = true;
}
function stopChange(e) {
  clearInterval(interval);
  btnStart.addEventListener("click", startChange);
  btnStart.disabled = false;
}
