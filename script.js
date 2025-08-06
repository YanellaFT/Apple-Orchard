/* VARIABLES */
let screen = 0;
let fallingApple;
let basket;
let score = 0;

let next1;
let next2;
let next3;

let cutApple1;
let cutApple2;
let cutApple3;

let cut1 = false;
let cut2 = false;
let cut3 = false;

let bowl; //middle
let ingApple; //top right
let ingEgg; //top left
let ingFlour; //bottom right
let ingSugar; //bottom left

let ingAppleDrag = false;
let ingEggDrag = false;
let ingFlourDrag = false;
let ingSugarDrag = false;

let ingAppleAdded = false;
let ingEggAdded = false;
let ingFlourAdded = false;
let ingSugarAdded = false;

let appleImg;
let basketImg;

let clicks = 20
let bakeCake;

let screen0bg;

/* PRELOAD LOADS FILES */
function preload(){
  //images
  screen0bg = loadImage("assets/screen0bg.png");
  appleImg = loadImage("assets/wholeAppleImg.png");
  basketImg = loadImage("assets/basket.png");
  appleScreen2Img = loadImage("assets/appleScreeb2.png");
  cutAppleImg = loadImage("assets/cutApple.png");
  eggImg = loadImage("assets/eggs.png");
  flourImg = loadImage("assets/flour.png");
  sugarImg = loadImage("assets/sugar.png");
  mixingBowlImg = loadImage("assets/mixingbowl.png");
  knifeImg = loadImg("assets/knife.png");
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
  fallingApple.image = appleImg;
  appleImg.width = 20;
  appleImg.height = 20;

  basket = new Sprite(-200,-200, 100, 45, "k");
  basket.image = basketImg;
  basketImg.width = 100;
  basketImg.height = 100;

  next1 = new Sprite(-200, -200, 30, 15, "k");
  next1.color = "yellow";
  next1.text = "-->";

  cutApple1 = new Sprite(-200, -200);
  cutApple1.static = true;
  cutApple1.diameter = 50;
  cutApple1.image = appleScreen2Img;
  appleScreen2Img.width = 50;
  appleScreen2Img.height = 50;

  cutApple2 = new Sprite(-200, -200);
  cutApple2.static = true;
  cutApple2.diameter = 50;
  cutApple2.image = appleScreen2Img;
  appleScreen2Img.width = 50;
  appleScreen2Img.height = 50;

  cutApple3 = new Sprite(-200,-200);
  cutApple3.static = true;
  cutApple3.diameter = 50;
  cutApple3.image = appleScreen2Img;
  appleScreen2Img.width = 50;
  appleScreen2Img.height = 50;

  cutAppleImg.width = 90;
  
  next2 = new Sprite(-200, -200, 30, 15, "k");
  next2.color = "yellow";
  next2.text = "-->";

  bowl = new Sprite(-200, -200);
  bowl.static = true;
  bowl.image = mixingBowlImg;
  mixingBowlImg.width = 110;

  ingApple = new Sprite(-200, -200);
  ingApple.static = true;
  ingApple.image = cutAppleImg;

  ingEgg = new Sprite(-200, -200);
  ingEgg.static = true;
  ingEgg.image = eggImg;
  eggImg.width = 50;

  ingFlour = new Sprite(-200, -200);
  ingFlour.static = true;
  ingFlour.image = flourImg;
  flourImg.width = 50;

  ingSugar = new Sprite(-200, -200);
  ingSugar.static = true;
  ingSugar.image = sugarImg;
  sugarImg.width = 50;

  next3 = new Sprite(-200, -200, 30, 15, "k");
  next3.color = "yellow";
  next3.text = "-->";

  bakeCake = new Sprite(-200, -200, 70, 50, "k");

  next4 = new Sprite(-200, -200, 30, 15, "k");
  next4.color = "yellow";
  next4.text = "-->";
  
  //SCREEN 0
  background(screen0bg); //DRAWWWW!!!!"#86cbd9"
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
    background(screen0bg); //"#86cbd9"
    /*textSize(20);
    textFont('cursive');
    text("Welcome to", 200, 75);*/
    
    textFont('Barrio');
    textSize(40);
    fill(255, 0, 0);
    text("Apple \n               Orchard", 150, 150);
    
    textFont('cursive');
    fill("black");
    /*text("Press START to create your \nown apple pie!", 200, 240);*/
    
    //display startButton
    startButton.pos = {x: 200, y: 325};
    startButton.color = "yellow";

    if (startButton.mouse.pressed()) {
    print("startButton pressed");
    showScreen1();
    screen = 1;
  }  
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
    if (fallingApple.overlaps(basket)) {
      fallingApple.y = 0;
      fallingApple.x = random(width);
      fallingApple.vel.y = random(3,6);
      //fallingApple.direction = "down";
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

  //cutting apples --> SCREEN 2
  if (screen == 2) {
    background("blue"); //DRAWWWW!!!!
    textSize(15);
    text("Step 2: Cut the apples \nby clicking on them", 200, 35);
    /*knifeImg.width = 30;
    knifeImg.height = 30;
    //noCursor();*/
    //cursor('knife.png');


    //position cutApples
    cutApple1.pos = {x: 200, y: 120};
    cutApple2.pos = {x: 200, y: 225};
    cutApple3.pos = {x: 200, y: 330};

    //cut Apples
    if (cutApple1.mouse.pressed()) {
      print("cutApple1 pressed");
      cutApple1.image = cutAppleImg;
      cut1 = true;
    } else if (cutApple2.mouse.pressed()) {
      print("cutApple2 pressed");
      cutApple2.image = cutAppleImg;
      cut2 = true;
    } else if (cutApple3.mouse.pressed()) {
      print("cutApple3 pressed");
      cutApple3.image = cutAppleImg;
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

  //adding ingredients --> SCREEN 3
  if (screen == 3) {
    background("purple"); //DRAWWW!!!
    textSize(15);
    text("Step 3: Drag and drop the \ningredients into the \nbowl make the dough", 200, 40);

    //cursor('grab');

    bowl.pos = {x: 200, y: 300};

    if (!ingAppleAdded) {
      ingApple.pos = {x: 300, y: 150};
    }
    if (!ingEggAdded) {
      ingEgg.pos = {x: 100, y: 230};      
    }
    if (!ingFlourAdded) {
      ingFlour.pos = {x: 300, y: 400};
    }
    if (!ingSugarAdded) {
      ingSugar.pos = {x: 100, y:400};
    }

    //drag ingApple
    if (!ingAppleAdded && ingApple.mouse.pressing()) {
      ingAppleDrag = true;
      ingApple.static = false;
      print("ingApple");
    } else if (!ingApple.mouse.pressing()) {
      ingAppleDrag = false;
      ingApple.static = true;
    }
    if (ingAppleDrag) {
      ingApple.pos = {x: mouseX, y: mouseY};
    }
let appleDistanceToBowl = dist(ingApple.x, ingApple.y, bowl.x, bowl.y);
    if (appleDistanceToBowl < 35 && ingAppleDrag) {
      ingApple.pos = {x: -200, y: -200};
      ingAppleDrag = false;
      ingApple.static = true;
      ingAppleAdded = true;
    }

    //drag ingEgg
    if (!ingEggAdded && ingEgg.mouse.pressing()) {
      ingEggDrag = true;
      ingEgg.static = false;
      print("ingEgg");
    } else if (!ingEgg.mouse.pressing()) {
      ingEggDrag = false;
      ingEgg.static = true;
    }
    if (ingEggDrag) {
      ingEgg.pos = {x: mouseX, y: mouseY};
    }
    let eggDistanceToBowl = dist(ingEgg.x, ingEgg.y, bowl.x, bowl.y);
    if (eggDistanceToBowl < 35 && ingEggDrag) {
      ingEgg.pos = {x: -200, y: -200};
      ingEggDrag = false;
      ingEgg.static = true;
      ingEggAdded = true;
    }

    //drag ingFlour
    if (!ingFlourAdded && ingFlour.mouse.pressing()) {
      ingFlourDrag = true;
      ingFlour.static = false;
      print("ingFlour");
    } else if (!ingFlour.mouse.pressing()) {
      ingFlourDrag = false;
      ingFlour.static = true;
    }
    if (ingFlourDrag) {
      ingFlour.pos = {x: mouseX, y: mouseY};
    }
    let flourDistanceToBowl = dist(ingFlour.x, ingFlour.y, bowl.x, bowl.y);
    if (flourDistanceToBowl < 35 && ingFlourDrag) {
      ingFlour.pos = {x: -200, y: -200};
      ingFlourDrag = false;
      ingFlour.static = true;
      ingFlourAdded = true;
    }

    //drag ingSugar
    if (!ingSugarAdded && ingSugar.mouse.pressing()) {
      ingSugarDrag = true;
      ingSugar.static = false;
      print("ingSugar");
    } else if (!ingSugar.mouse.pressing()) {
      ingSugarDrag = false;
      ingSugar.static = true;
    }
    if (ingSugarDrag) {
      ingSugar.pos = {x: mouseX, y: mouseY};
    }
    let sugarDistanceToBowl = dist(ingSugar.x, ingSugar.y, bowl.x, bowl.y);
    if (sugarDistanceToBowl < 35 && ingSugarDrag) {
      ingSugar.pos = {x: -200, y: -200};
      ingSugarDrag = false;
      ingSugar.static = true;
      ingSugarAdded = true;
    }

    if (ingAppleAdded && ingEggAdded && ingFlourAdded && ingSugarAdded) {
      textSize(10);
      text("Press to \ncontinue", 370, 355);
      next3.pos = {x: 370, y: 380};
    }

    if (next3.mouse.pressed()) {
      print("next3 pressed");
      showScreen4();
      screen = 4;
     }
    
  } //end of screen == 3

  //bake cake --> SCREEN 4
  if (screen == 4) {
    background("yellow");
    textSize(15);
    text("Step 4: Click on the cake to \nbake it", 120, 35);

    textSize(13);
    text( clicks + " more clicks \nneeded", 330, 35);  

    bakeCake.pos = {x: 200, y: 200};

    if (bakeCake.mouse.pressed()) {
      clicks = clicks - 1;
    }

    if (clicks == 0) {
      textSize(10);
      text("Press to \ncontinue", 370, 355);
      next4.pos = {x: 370, y: 380};
    }
  } //end of screen == 4

} //end of draw funciton

/* FUNCTIONS */
function showScreen1() {
  clear();
  startButton.pos = {x: -100, y: -100};
  
  fallingApple.x = 50;
  fallingApple.y = 0;
  fallingApple.vel.y = 3;

  basket.pos = {x: 200, y: 340};
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

function showScreen4() {
  bowl.pos = {x: -200, y: -200};
  next3.pos = {x: -200, y: -200};
}