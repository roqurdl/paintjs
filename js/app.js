const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll("#jsColors div");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const save = document.querySelector("#jsSave");

const CANVAS_SIZE = 500;
const DEFAULT_COLOR = "#2c2c2c";

ctx.lineWidth = 1.5;
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;

let modechange = false;
let painting = false;

function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  if (painting == false) {
    ctx.beginPath(x, y);
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
// offset은 tag위 client X,Y는 window에서 tag의 크기가 화면의 크기면 둘은 차이가 없음.

function startPainting() {
  painting = true;
}

function finishPainting() {
  painting = false;
}

function chooseColorClick(e) {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function changeRange() {
  ctx.lineWidth = parseFloat(range.value);
}

function handleModeClick() {
  if (modechange === false) {
    modechange = true;
    mode.innerText = "paint";
  } else {
    modechange = false;
    mode.innerText = "fill";
  }
}

function canvasClick() {
  if (modechange) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "paint";
  link.click();
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseup", finishPainting);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("click", canvasClick);

Array.from(colors).forEach((color) =>
  color.addEventListener("click", chooseColorClick)
);

range.addEventListener("input", changeRange);
mode.addEventListener("click", handleModeClick);
save.addEventListener("click", handleSaveClick);
