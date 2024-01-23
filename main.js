let linha = 1;
let cor = "black";
let lastPostionX;
let lastPositionY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    cor = document.getElementById("color").value;
    linha = document.getElementById("width").value;
    mouseEvent = "myMouseDown";
}


canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){

    postionMouseX = e.clientX - canvas.offsetLeft;
    postionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth  = linha;

        ctx.moveTo(lastPositionX,lastPositionY)

        ctx.lineTo(positionMouseX, positionMouseY)
        ctx.stroke()
    }
    lastPositionX = positionMouseX;
    lastPositionY = positionMouseY;
}

canvas,addEventListener("mouseup", myMouseUp)
function myMouseUp(e){
    mouseEvent="mouseUP"
}

canvas.addEventListener("mouseleave", myMouseLeave)
    function myMouseLEave(e){
        mouseEvent= "mouseleave"
    }
