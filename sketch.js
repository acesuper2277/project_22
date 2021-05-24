var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairySound;
var invisibleEdge

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png" ,"fairyImage2.png")
	fairySound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

    fairySound.loop();
	
    fairy = createSprite(130,510,0,20);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    invisibleEdge = createSprite(730,520,20,20);
	invisibleEdge.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.collide(invisibleEdge);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(fairy.x);

  if (star.y > 470 && star.position.y > 470){

	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === RIGHT_ARROW){

		fairy.x = fairy.x + 20;
	}

	if (keyCode === DOWN_ARROW && fairy.x > 511) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
