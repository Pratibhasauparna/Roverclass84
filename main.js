canvas=document.getElementById("mycanvas");
ctx=canvas.getcontext("2d");
roverwidth=100;
roverheight=90;
roverx=10;
rovery=10;
background_image="mars2.jpg";
rover_image="rover1.jpg";
function add() {
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground();
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover();
    rover_imgTag.src=rover_image;

}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight);

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
 {
    keypressed=e.keycode;

    console.log(keypressed);
    if(keypressed=="38")
    {
        up(); 
        console.log("up");
}
   if (keypressed=="39")
   {right()
console.log("right");}
}
if (keypressed=="40")
{down()
console.log("down");}
}
if (keypressed=="37")
{left()
console.log("left");}
}