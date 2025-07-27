/* VARIABLES */
let screen = 0;
let fallingApple;
let basket;
let score = 0;
let next1;
let cutApple1;
let cutApple2;
let cutApple3;
let cut1 = false;
let cut2 = false;
let cut3 = false;
let next2;
let bowl;
let ingApple;
let ingEgg;
let ingFlour;
let ingSugar;
let ingAppleDrag = false;
let ingEggDrag = false;
let ingFlourDrag = false;
let ingSugarDrag = false;

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

  next1 = new Sprite(-200, -200, 30, 15, "k");

  cutApple1 = new Sprite(-200, -200);
  cutApple1.diameter = 50;

  cutApple2 = new Sprite(-200, -200);
  cutApple2.diameter = 50;

  cutApple3 = new Sprite(-200,-200);
  cutApple3.diameter = 50;

  next2 = new Sprite(-200, -200, 30, 15, "k");

  bowl = new Sprite(-200, -200, 40, 40);
  bowl.static = true;

  ingApple = new Sprite(-200, -200);
  ingApple.diameter = 30;
  ingApple.static = true;

  ingEgg = new Sprite(-200, -200);
  ingEgg.diameter = 30;
  ingEgg.static = true;

  ingFlour = new Sprite(-200, -200, 30, 50);
  ingFlour.static = true;

  ingSugar = new Sprite(-200, -200, 30, 50);
  ingSugar.static = true;

  
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

  //home screen --> SCREEN 0
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

  //catching apples --> SCREEN 1
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
      basket.x = 45;
    } else if (basket.x > 355) {
      basket.x = 355;
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
    if (score == 4) {
      textSize(10);
      text("Press to \ncontinue", 370, 355);
      fallingApple.pos = {x: -200, y: -200};
      basket.vel.x = 0

      if (basket.x > 260) {
        basket.x = 250;
      }

      next1.pos = {x: 375, y: 380};
    }

    if (next1.mouse.pressed()) {
      print("next1 pressed");
      showScreen2();
      screen = 2;
    }
  } //end of screen == 1

  if (screen == 2) {
    background("blue"); //DRAWWWW!!!!
    textSize(15);
    text("Step 2: Cut the apples \nby clicking on them", 200, 35);

    //position cutApples
    cutApple1.pos = {x: 200, y: 120};
    cutApple2.pos = {x: 200, y: 225};
    cutApple3.pos = {x: 200, y: 330};

    //cut Apples
    if (cutApple1.mouse.pressed()) {
      print("cutApple1 pressed");
      cut1 = true;
    } else if (cutApple2.mouse.pressed()) {
      print("cutApple2 pressed");
      cut2 = true;
    } else if (cutApple3.mouse.pressed()) {
      print("cutApple3 pressed");
      cut3 = true;
    }

    if (cut1 && cut2 && cut3) {
      textSize(10);
      text("Press to \ncontinue", 370, 355);
      next2.pos = {x: 370, y: 380};
    }

    if (next2.mouse.pressed()) {
      print("next2 pressed");
      showScreen3();
      screen = 3;
    }

  } //end of screen == 2

  if (screen == 3) {
    background("purple"); //DRAWWW!!!
    textSize(15);
    text("Step 2: Drag and drop the \ningredients to \nmake the dough", 200, 40);

    bowl.pos = {x: 200, y: 250};
    ingApple.pos = {x: 300, y: 150};
    ingEgg.pos = {x: 100, y: 150};
    ingFlour.pos = {x: 300, y: 350};
    ingSugar.pos = {x: 100, y: 350};

    //drag ingApple
    if (ingApple.mouse.pressing()) {
      ingAppleDrag = true;
      ingApple.static = false
      print("ingApple");
    }
    if (ingAppleDrag) {
      ingApple.pos = {x: mouseX, y: mouseY};
    }
    if (!ingApple.mouse.pressing()) {
      ingAppleDrag = false;
      ingApple.static = true;
    }
    if (ingApple.mouse.pressing() && ingApple.collides(bowl)) {
      ingApple.pos = {x: -200, y: -200};
      ingAppleDrag = false;
    }
  } //end of screen == 3

} //end of draw funciton

/* FUNCTIONS */
function showScreen1() {
  startButton.pos = {x: -100, y: -100};
  
  fallingApple.x = 50;
  fallingApple.y = 0;
  fallingApple.vel.y = 3;

  basket.pos = {x: 200, y: 360};
}

function showScreen2() {
  
  basket.pos = {x: -200, y:-200};
  next1.pos = {x: -200, y:-200};

}

function showScreen3() {
  cutApple1.pos = {x: -200, y:-200};
  cutApple2.pos = {x: -200, y:-200};
  cutApple3.pos = {x: -200, y:-200};
  next2.pos = {x: -200, y: -200};
}