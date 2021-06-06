var canvas=new fabric.Canvas("myCanvas");
block_width_image=50;
block_height_image=50;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object_image=Img;
        block_object_image.scaleToWidth(block_width_image);
        block_object_image.scaleToHeight(block_height_image);
        block_object_image.set({top:player_y,left:player_x});
        canvas.add(block_object_image);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true&&keyPressed=="80"){
        block_width_image=block_width_image+10;
        block_height_image=block_height_image+10;
        document.getElementById("width_span").innerHTML=block_width_image;
        document.getElementById("height_span").innerHTML=block_height_image;
    }
    if(e.shiftKey&&keyPressed=="77"){
        block_width_image=block_width_image-10;
        block_height_image=block_height_image-10;
        document.getElementById("width_span").innerHTML=block_width_image;
        document.getElementById("height_span").innerHTML=block_height_image;
    }
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
    if(keyPressed=='70'){
        new_image('ironman_face.png');
        console.log("f");
    }
    if(keyPressed=='66'){
        new_image('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed=='76'){
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed=='82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed=='72'){
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height_image;
        console.log("block image height="+block_height_image);
        console.log("When up arrow key is pressed,X="+player_x+",Y"+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height_image;
        console.log("block image height="+block_height_image);
        console.log("When down arrow key is pressed,X="+player_x+",Y"+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>0){
        player_x=player_x-block_width_image;
        console.log("block image width="+block_width_image);
        console.log("When left arrow key is pressed,X="+player_x+",Y"+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_width_image;
        console.log("block image width="+block_width_image);
        console.log("When right arrow key is pressed,X="+player_x+",Y"+player_y);
        canvas.remove(player_object);
        player_update();
    }
}