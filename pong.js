var canvas;
var canvasContext;
var ballX = 75, ballY = 75;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(drawEverything, 1000);
}

function moveEverything() {
    ballX += 2; //move ball right
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