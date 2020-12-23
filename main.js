canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_x=10;
var rover_y=10;
var rover_width=100;
var rover_height=90;
var background_image="mars.jpg";
var rover_image="rover.png";
function add(){
    background_picture=new Image();
    background_picture.onload=uploadbackground;
    background_picture.src=background_image;

    rover=new Image();
    rover.onload=rover_car;
    rover.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_picture,0,0,canvas.width,canvas.height);
}
function rover_car(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down")
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y >=0){
        rover_y-= 10;
        uploadbackground();
            rover_car();
    }
}
function down(){
    if(rover_y <=500){
        rover_y+= 10;
        uploadbackground();
            rover_car();
    }
}
function left(){
    if(rover_x >=0){
        rover_x-= 10;
        uploadbackground();
            rover_car();
    }
}
function right(){
    if(rover_x <=700){
        rover_x+= 10;
        uploadbackground();
            rover_car();
    }
}