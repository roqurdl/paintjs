const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 1.5;
ctx.strokeStyle = "#2c2c2c";

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

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseup", finishPainting);
canvas.addEventListener("mousedown", startPainting);
