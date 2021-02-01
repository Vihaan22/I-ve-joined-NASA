var canvas=document.getElementById(("myCanvas"))
var ctx=canvas.getContext("2d")
var roverX=50
var roverY=60
var roverH=100
var roverW=100
var roverimg="rover.png"
var cnvsimg="mars.jpg"

function add (){
    bg=new Image();
    bg.onload=uploadbackground();
    bg.src=cnvsimg;

    rover=new Image();
    rover.onload=uploadrover();
    rover.src=roverimg


    }
    function uploadbackground (){
        ctx.drawImage(bg,0,0,canvas.width,canvas.height)


    }
function uploadrover (){
    ctx.drawImage(rover,roverX,roverY,roverW,roverH)
}

window.addEventListener("keydown",kd)
function kd(e) {
    x=e.keyCode
    console.log(x)

    if(x==37){
        left()
        console.log("You looking left,mouse")
    }
    if(x==38){
        up()
        console.log("You looking up, mouse")
    }
    if(x==39){
        right()
    }
    if(x==40){
        down()
    }

}
function right() {
    if (roverX<700) {
        roverX=roverX+10
        uploadbackground()
        uploadrover()

    }
}
function left() {
    if (roverX>0){
    roverX=roverX-10
    uploadbackground()
    uploadrover()
    }   
}
    
function up() {
    if (roverY>0){
        roverY=roverY-10
        uploadbackground()
        uploadrover()
    }
}
function down() {
    if (roverY<500){
        roverY=roverY+10
        uploadbackground()
        uploadrover()
    }
}