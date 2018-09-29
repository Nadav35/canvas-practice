let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(400, 100, 100, 100);
// ctx.fillStyle = 'pink';
// ctx.fillRect(300, 300, 100, 100);


// Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = 'red';
// ctx.stroke();

// Arcs and circles
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// for (let i = 0; i < 200; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.strokeStyle = 'blue';
//   ctx.stroke();    
// }

let el = document.querySelector('body');
let mouse = {
  x: undefined,
  y: undefined
};


let colorArray = ['#FFDE59', '#FFBB59', '#FF8859', '#FF5966', '#F459FF'];

el.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', e => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init(); 
});


class Circle {
  constructor(x, y, dx, dy, rad) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.maxRadius = 40;
    this.minRadius = rad;

  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    // ctx.strokeStyle = 'blue';
     
    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.stroke();
    
  }

  update() {
    if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.rad > innerHeight || this.y - this.rad < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
       if (this.rad < this.maxRadius) {
         this.rad += 1;
       }
      
    } else if (this.rad > this.minRadius) {
      this.rad -= 1;
    }

    this.draw();
  }
}

let circle = new Circle(200, 200, 3, 3, 30);

let circles = [];


const init = () => {
  circles = [];
  for (let i = 0; i < 2000; i++) {
    let rad = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - rad * 2) + rad;
    let y = Math.random() * (innerHeight - rad * 2) + rad;
    let dy = (Math.random() - 0.5);
    let dx = (Math.random() - 0.5);
    circles.push(new Circle(x, y, dx, dy, rad));
  }
};





const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
  

  
};

animate();
init();
