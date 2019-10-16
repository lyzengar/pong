var canvas;
var canvasContext;
var ballX = 75, ballY = 75;
var ballSpeedX = 2;
var ballSpeedY = 2;

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

function colorRect(topLeftX, topLeftY, bowWidth, boxHeight, fillColor) {
    
}

function drawEverything() {
    // background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.height);
    //draw left paddle
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 250, 10, 100);
    // draw a circle
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, 10, 0, Math.PI*2, true);
    canvasContext.fill();
}