function setup(){
    video= createCapture(VIDEO);
video.size(500,450);
canvas=createCanvas(500,500);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('PoseNet Is Intialized')
}

function draw()
{
    background('#C7CB85')
}

function gotPoses(results ,error){
if(error){
    console.log(error);
}
else{
   if(results.length > 0) {
    console.log(results);
   }

}
}
