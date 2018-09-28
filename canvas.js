let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(400, 100, 100, 100);
ctx.fillStyle = 'pink';
ctx.fillRect(300, 300, 100, 100);


// Line
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'red';
ctx.stroke();

// Arcs and circles
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

for (let i = 0; i < 200; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'blue';
  ctx.stroke();    
}

