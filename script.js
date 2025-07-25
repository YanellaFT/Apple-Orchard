/* VARIABLES */

/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  textAlign(CENTER,CENTER);

  startButton = new Sprite(-200, -200, 60, 30);
  textFont('cursive');
  startButton.text = "START";
  startButton.static = true;

}

/* DRAW LOOP REPEATS */
function draw() {
  //SCREEN 0
  background("#86cbd9") //need to draw!!!
  startButton.pos = {x: 200, y: 325};
  textFont('cursive');
  text("Tryout", 100, 100);
  textFont('Barrio');
  text("Apple Orchard", 100, 150);
  
  if (startButton.mouse.pressed) {
    //introduce screen for catching apples
  }
}

/* FUNCTIONS */