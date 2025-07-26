/* VARIABLES */
let screen = 0;
let fallingApple;
let basket;
let score = 0;
let next1;

/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  textAlign(CENTER,CENTER);
  
  //buttons
  startButton = new Sprite(-200, -200, 70, 35);
  startButton.text = "START";
  startButton.static = true;

  fallingApple = new Sprite(-200,-200);
  fallingApple.diameter = 20;

  basket = new Sprite(-200,-200, 100, 45, "k");

  next1 = new Sprite(-200, -200, 60, 30);

  
  //SCREEN 0
  background("#86cbd9"); //DRAWWWW!!!!
  textSize(20);
  textFont('cursive');
  text("Welcome to", 200, 75);
  
  textFont('Barrio');
  textSize(40);
  fill(255, 0, 0);
  text("Apple \n               Orchard", 150, 150);
  
  textFont('cursive');
  textSize(20);
  fill("black");
  text("Press START to create your \nown apple pie!", 200, 240);

}

function draw() {
  
  if (screen == 0) {
    background("#86cbd9"); //DRAWWWW!!!!
    textSize(20);
    textFont('cursive');
    text("Welcome to", 200, 75);
    
    textFont('Barrio');
    textSize(40);
    fill(255, 0, 0);
    text("Apple \n               Orchard", 150, 150);
    
    textFont('cursive');
    textSize(20);
    fill("black");
    text("Press START to create your \nown apple pie!", 200, 240);
    
    //display startButton
    startButton.pos = {x: 200, y: 325};
    startButton.color = "yellow";
  }
  
  if (startButton.mouse.pressed()) {
    print("startButton pressed");
    showScreen1();
    screen = 1;
  }
  
  if (screen == 1) {
    background("pink"); //DRAWWWW!!!!
    textSize(15);
    text("Step 1: Collect all the apples \nby using the arrow keys", 120, 35);

    textSize(13);
    text("Apples Collected: " + score, 330, 35);    
    
    //falling apples
    if (fallingApple.y >= height) {
      fallingApple.y = 0;
      fallingApple.x = random(width);
      fallingApple.vel.y = random(3,6);
    }

    //moving basket
    if (kb.pressing("left")) {
      basket.vel.x = -4;
    } else if (kb.pressing("right")) {
      basket.vel.x = 4;
    } else {
      basket.vel.x = 0;
    }

    //stop basket at edges
    if (basket.x < 45) {
      basket.vel = 0;
    } else if (basket.x > 355) {
      basket.vel = 0;
    }

    //apples collides with basket
    if (fallingApple.collides(basket)) {
      fallingApple.y = 0;
      fallingApple.x = random(width);
      fallingApple.vel.y = random(3,6);
      fallingApple.direction = "down";
      score = score + 1;
    }

    //continue button at score == 15
    //FIX THIS
    if (score == 4) {
      textSize(10);
      text("Press to \ncontinue", 380, 360);

      next1.pos = {x: 380, y: 380};
    }
    
  } //end of screen == 1

} //end of draw funciton

/* FUNCTIONS */
function showScreen1() {
  startButton.pos = {x: -100, y: -100};
  
  fallingApple.x = 50;
  fallingApple.y = 0;
  fallingApple.vel.y = 3;

  basket.pos = {x: 200, y: 360};
}