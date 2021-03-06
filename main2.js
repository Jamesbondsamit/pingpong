 function preload() {
	ball_touch_paddle = loadSound("ball_touch_paddel.wav");
	missed=loadSound("missed.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	video= createCapture(VIDEO)
	video.parent(canvas);
	video.size(600,300);
	instializeInSetup(ping-pong);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.om('pose',gotPoses);
}
function modelLoaded(){
	console,log("model is loaded")
}
function gotPoses(results){
	if(results.length>0){
		handX=results[0].pose.hand.x;
		handY=results[0].pose.hand.y;
		console.log("handX= " + handX + ", handY= " + handY);
	}
}

function draw() {
	game()
}
