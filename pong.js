var canvas;
var canvasContext;
var ballX = 75, ballY = 75;
var ballSpeedX = 2;
var ballSpeedY = 2;
var paddle1Y = 250;
const paddle1Height = 100;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y - (paddle1Height/2); //vertically centered on mouse
    })
    var framesPerSecond = 30;

    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {
    ballX > canvas.width || ballX < 0 ? ballSpeedX *= -1 : null; //reflect ball off sides of screen
    ballY > canvas.height || ballY < 0 ? ballSpeedY *= -1 : null; //reflect ball off bottom and top sides of screen
    ballX += ballSpeedX; //move ball right
    ballY += ballSpeedY; //move ball down
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function drawEverything() {
    // draw background
    colorRect(0, 0, canvas.clientWidth, canvas.height, 'black')
    //draw left paddle
    colorRect(0, paddle1Y, 10, paddle1Height, 'white')
    // draw the ball
    colorCircle(ballX, ballY, 10, 'white');
}

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect(), root = document.documentElement;

    // account for the margins, canvas position on page, scroll amount, etc.
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}