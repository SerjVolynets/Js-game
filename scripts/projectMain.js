var canvas2 = document.getElementById('canvasId2');
var ctx2 = canvas2.getContext('2d');

// for(var x = 0.5; x<600; x+=10) {
//     ctx2.moveTo(x,0);
//     ctx2.lineTo(x,200);
// }

// for(var y = 0.5; y<200; y+=10){
//     ctx2.moveTo(0,y);
//     ctx2.lineTo(600,y);
// }

// ctx2.strokeStyle = '#eee';
// ctx2.stroke();


function drawHouse(){
    ctx2.strokeStyle = 'black';
    ctx2.rect(200,100,70,70);
    ctx2.stroke();
    ctx2.moveTo(200,100);
    ctx2.lineTo(235,20);
    ctx2.stroke();
    ctx2.moveTo(235,20);
    ctx2.lineTo(270,100);
    ctx2.fillStyle = "green";
    ctx2.fill();
    ctx2.stroke();
}

drawHouse();