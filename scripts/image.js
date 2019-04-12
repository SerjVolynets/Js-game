var image = new Image();

image.onload = function (){
    ctx.drawImage(image,10,10,80,80);
};

image.src = 'img/cuteDine.jpg';