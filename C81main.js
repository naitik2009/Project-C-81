canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2* Math.PI);
ctx.stroke() ;

canvas.addEventListner("mouse_down", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);
}

mouse_x = e.clirntX - canvas.offsetleft;
mouse_y = e.clirntY - canvas.offsettop;

console.log("X = " + mouse_x +  " , "Y = " + mouse_y + ");
circle(mouse_x, mouse_y);
{

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2* Math.PI);
    ctx.stroke();
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}