var canvas;
var canvasContext;
var ballX = 75, ballY = 75;
var ballSpeedX = 2;
var ballSpeedY = 2;
var paddle1Y = 250;
var paddle2Y = 250;
var leftScore = 0;
var rightScore = 0;
const paddle1Height = 100;
const paddle2Height = 100;
const paddleWidth = 10;

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
    if(ballX < 0) {
        if(ballY > paddle1Y && ballY < paddle1Y + paddle1Height){
            ballSpeedX *= -1
        } else {
            rightScore += 1;
            ballReset();
        }
    }
    if(ballX > canvas.width) {
        if(ballY > paddle2Y && ballY < paddle2Y + paddle2Height){
            ballSpeedX *= -1
        } else {
            ballReset();
        }
    }
    ballY > canvas.height || ballY < 0 ? ballSpeedY *= -1 : null; //reflect ball off bottom and top sides of screen
    // ballX < 0 && ballY < paddle1Y || ballX < 0 && ballY > paddle1Y + paddle1Height ? ballReset() : null;
    // ballX > canvas.width && ballY < paddle2Y || ballX > canvas.width && ballY > paddle2Y + paddle2Height ? ballReset() : null;
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
    colorRect(0, paddle1Y, paddleWidth, paddle1Height, 'white')
    //draw right paddle
    colorRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddle2Height, 'white')
    // draw the ball
    colorCircle(ballX, ballY, 10, 'white');
    //display scores
    canvasContext.fillStyle = 'white';
    canvasContext.fillText('stuff', 100, 100);
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

function ballReset() {
    console.log("Player 1 loses")
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}