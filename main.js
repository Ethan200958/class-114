function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet: Initalized");
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function filteredSnap() {
    save('filteredSnap.png');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].poseNet.nose.x);
        console.log("nose y = " + results[0].poseNet.nose.y);
    }
}