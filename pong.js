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
    var framesPerSecond = 30;

    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {
    ballX > canvas.width ? ballSpeedX *= -1 : null; //reflect ball off right side of screen
    ballX < 0 ? ballSpeedX *= -1 : null; //reflect ball off left side of screen
    ballY > canvas.height ? ballSpeedY *= -1 : null; //reflect ball off bottom side of screen
    ballY < 0 ? ballSpeedY *= -1 : null; //reflect ball off top side of screen
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