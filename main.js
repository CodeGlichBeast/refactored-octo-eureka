var mouse_event="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width=5;
radius=3;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouse_event="mouseDown";
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouse_event="mouseLeave";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
CPO_x=e.clientX-canvas.offsetLeft;
CPO_y=e.clientY-canvas.offsetTop;

if (mouse_event == "mouseDown"){
    console.log("Current x and y is");
    console.log("x = " + CPO_x + "y = " + CPO_y);
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(CPO_x, CPO_y, radius, 0, 2*Math.PI);

    ctx.stroke();
}
}
function reset(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
