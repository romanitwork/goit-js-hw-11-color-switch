"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const body = document.querySelector("body");
const startButton = body.querySelector('button[data-action="start"]');
const stopButton = body.querySelector('button[data-action="stop"]');
const min = 0;
const max = colors.length;
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startButton.addEventListener("click", () => {
  interval = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  }, 1000);
  startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  startButton.disabled = false;
});
