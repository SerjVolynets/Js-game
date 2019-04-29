var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;

var bricks = [];
for (var i = 0; i<brickColumnCount; i++) {
    bricks[i] = [];
    for(var k = 0; k<brickRowCount; k++){
        bricks[i][k] = {x:0, y:0,status:1};
    }
}



document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    }
    else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler (e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    }
    if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    }
}
function collisionDetection() {
    for(var i = 0; i<brickColumnCount; i++) {
        for(var k = 0; k<brickRowCount; k++) {

            var b = bricks[i][k];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                        clearInterval(interval); 
                    }
                }  

            }
             
        }
    }
}

function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Score: '+score,8,20);

}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();    
}

function drawBricks(){
    for(var i = 0; i<brickColumnCount; i++) {
        for(var k  = 0; k<brickRowCount; k++) {
            if(bricks[i][k].status==1) {
            var brickX = (i*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (k*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[i][k].x = brickX;
            bricks[i][k].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX,brickY,brickWidth,brickHeight);
            ctx.fillStyle = '#0095DD';
            ctx.fill();
            ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawScore();
    if(x+dx>canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {

         if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
         else {
            alert('GAME OVER');
            document.location.reload();
            clearInterval(intervalID);
        }
    }
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX +=7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;

}

var intervalID = setInterval(draw,10);

