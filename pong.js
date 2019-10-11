var canvas;
var canvasContext;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    drawEverything();
}

function drawEverything() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.height);
}