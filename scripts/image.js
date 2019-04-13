var image = new Image();
var timerId;
function stInt (func) {
     timerId = setInterval(func,100);
}

image.onload = function (){
     stInt(move);
};

image.src = 'img/cuteDine.jpg';
var x = 10;

function move() {
    if (x < 200) x +=5; else {clearInterval(timerId); stInt(moveBack);}
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(image,x,10,80,80);
}

function moveBack() {
    if (x <= 200 && x>=10) x-=5; else {clearInterval(timerId);stInt(move);}
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(image,x,10,80,80);
}