var canvas;
var canvasContext;
var ballX = 75, ballY = 75;
var ballSpeedX = 2;

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
    ballX += ballSpeedX; //move ball right
}

function drawEverything() {
    // background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.height);

    // draw a circle
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, 10, 0, Math.PI*2, true);
    canvasContext.fill();
}