/*function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}*/

//Start
//Images
let imageBackground;
let imageSpriteTimmy;
//Sounds
let soundBackground = 'sounds/Itty_Bitty_8_Bit.mp3';
let playSound;
//Scenery
let scenery;
//Sprites
let spriteTimmy;

//Coodinates - Sprite Timmy
let abscissaTimmy = 0;
let ordinateTimmy = 0;
//Size - Sprite Timmy
let widthTimmy = 110;
let heightTimmy = 135;
//Map - Sprite Timmy
let mapXtimmy = 0;
let mapYtimmy = 0;
//Coodinates - Canvas
let axisX = 220;
let axisY = 270;
//Size - Background
let abscissaBackground = 0;
let ordinateBackground = 0;

//
function preload() {
    imageBackground = loadImage('images/scenery/backgroundLandscape.png');
    imageSpriteTimmy = loadImage('images/sprite/timmyRunning.png');
    //soundBackground = loadSound('sounds/Itty_Bitty_8_Bit.mp3');
    playSound = loadSound(soundBackground);
}

class Scenery {
    constructor(imageScenery, speedScenery) {
        this.imageScenery = imageScenery;
        this.speedScenery = speedScenery;
        this.x1 = 0;
        this.x2 = width;
    }
    showBackground() {
        image(this.imageScenery, this.x1, ordinateBackground, width, height);
        image(this.imageScenery, this.x2, ordinateBackground, width, height);
    }
    moveBackground() {
        this.x1 = this.x1 - this.speedScenery;
        this.x2 = this.x2 - this.speedScenery;

        if (this.x1 < -width) {
            this.x1 = width;
        }
        if (this.x2 < -width) {
            this.x2 = width;
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    scenery = new Scenery(imageBackground, 3);
    spriteTimmy = new SpriteTimmy(imageSpriteTimmy);
    playSound.loop();
}

function draw() {
    scenery.showBackground();
    scenery.moveBackground();
    image(imageSpriteTimmy, abscissaTimmy, (height - heightTimmy), widthTimmy, heightTimmy, mapXtimmy, mapYtimmy, axisX, axisY);
}