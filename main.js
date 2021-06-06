var canvas=new fabric.canvas("myCanvas");
block_width_image=50;
block_height_image=50;
player_x=10;
player_y=10;
player_object="";
block_image="";
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
        if(keyPressed=='70'){
            new_image('ironman_face.png');
        }
    }