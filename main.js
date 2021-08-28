nosex = 0
nosey = 0
rightx = 0
leftx = 0
difference = 0

function setup() {
    canavs = createCanvas(350, 350)
    canavs.position(800, 200)
    video = createCapture(VIDEO)
    video.size(350, 350)
    video.position(150, 200)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results) {
if (results.length>0) {
    console.log(results)
    nosex= results[0].pose.nose.x
    nosey= results[0].pose.nose.y
    leftx= results[0].pose.leftWrist.x
    rightx= results[0].pose.rightWrist.x
    difference= floor(leftx-rightx)

    
}
}

function draw() {
    background("skyblue")
    document.getElementById("size").innerHTML="size of the cookie is " + difference + " pixel" 
    fill("white")
    stroke("navy")
    textSize(difference)
    text("Cookie",nosex,nosey)
}