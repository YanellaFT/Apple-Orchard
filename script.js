/* VARIABLES */
let screen = 0;

/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  textAlign(CENTER,CENTER);
  textFont('cursive');

  startButton = new Sprite(-200, -200, 60, 30);
  //startButton.style('font-family', 'cursive');
  startButton.text = "START";
  startButton.static = true;

}

/* DRAW LOOP REPEATS */
function draw() {
  screen = 0;
  //SCREEN 0
  if (screen == 0) {
  background("#86cbd9") //need to draw!!!
  startButton.pos = {x: 200, y: 325};
  textFont('cursive');
  text("Tryout", 100, 100);
  textFont('Barrio');
  text("Apple Orchard", 100, 150);
  
  if (startButton.mouse.pressed) {
    screen = 1;
  }
  }

  //SCREEN 1
  if (screen == 1) {
    clear();
    background("black");
  }
}

/* FUNCTIONS */