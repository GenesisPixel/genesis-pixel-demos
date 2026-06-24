'use strict';

const circleCount = 150;
const circlePropCount = 8;
const circlePropsLength = circleCount * circlePropCount;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseTTL = 150;
const rangeTTL = 200;
const baseRadius = 100;
const rangeRadius = 200;
const rangeHue = 60;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;

let container;
let canvas;
let ctx;
let circles;
let circleProps;
let simplex;
let baseHue;

function setup() {
	createCanvas();
  resize();
  initCircles();
	draw();
}

function initCircles() {
  circleProps = new Float32Array(circlePropsLength);
  simplex = new SimplexNoise();
  baseHue = 220;

  let i;

  for (i = 0; i < circlePropsLength; i += circlePropCount) {
    initCircle(i);
  }
}

function initCircle(i) {
  let x, y, n, t, speed, vx, vy, life, ttl, radius, hue;

  x = rand(canvas.width);
  y = rand(canvas.height);
  n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff);
  t = rand(TAU);
  speed = baseSpeed + rand(rangeSpeed);
  vx = speed * cos(t);
  vy = speed * sin(t);
  life = 0;
  ttl = baseTTL + rand(rangeTTL);
  radius = baseRadius + rand(rangeRadius);
  hue = baseHue + n * rangeHue;

  circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
}

function updateCircles() {
  let i;

  baseHue++;

  for (i = 0; i < circlePropsLength; i += circlePropCount) {
    updateCircle(i);
  }
}

function updateCircle(i) {
  let i2=1+i, i3=2+i, i4=3+i, i5=4+i, i6=5+i, i7=6+i, i8=7+i;
  let x, y, vx, vy, life, ttl, radius, hue;

  x = circleProps[i];
  y = circleProps[i2];
  vx = circleProps[i3];
  vy = circleProps[i4];
  life = circleProps[i5];
  ttl = circleProps[i6];
  radius = circleProps[i7];
  hue = circleProps[i8];

  drawCircle(x, y, life, ttl, radius, hue);

  life++;

  circleProps[i] = x + vx;
  circleProps[i2] = y + vy;
  circleProps[i5] = life;

  (checkBounds(x, y, radius) || life > ttl) && initCircle(i);
}

function drawCircle(x, y, life, ttl, radius, hue) {
  ctx.save();
  ctx.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life,ttl)})`;
  ctx.beginPath();
  ctx.arc(x,y, radius, 0, TAU);
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}

function checkBounds(x, y, radius) {
  return (
    x < -radius ||
    x > canvas.width + radius ||
    y < -radius ||
    y > canvas.height + radius
  );
}

function createCanvas() {
  container = document.querySelector('.content--canvas');
	canvas = document.createElement('canvas');
	canvas.style = `
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	`;
	container.appendChild(canvas);
	ctx = canvas.getContext('2d');
}

function resize() {
	const { innerWidth, innerHeight } = window;
	
	canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateCircles();
	window.requestAnimationFrame(draw);
}

window.addEventListener('load', setup);
window.addEventListener('resize', resize);