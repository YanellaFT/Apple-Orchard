/* VARIABLES */
let screen = 0;
let fallingApple;

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

/* DRAW LOOP REPEATS */
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
    text("Step 1: Collect all the apples \nby using the arrow keys", 200, 35);
    
    if (fallingApple.y >= height) {
      fallingApple.y = 0;
      fallingApple.x = random(width);
      fallingApple.vel.y = random(1,5);
    }
  }

}

/* FUNCTIONS */
function showScreen1() {
  startButton.visible = false;
  fallingApple.x = 50;
  fallingApple.vel.y = 2;
}