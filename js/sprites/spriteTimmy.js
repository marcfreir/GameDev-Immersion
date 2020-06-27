//Map - Sprite Timmy
let mapXtimmy01 = 0;
let mapYtimmy01 = 0;
//Matrix (maybe)
/*
let mapXtimmy02 = 220;
let mapYtimmy02 = 0;
let mapXtimmy03 = mapXtimmy02 * 2;
let mapYtimmy03 = 0;
let mapXtimmy04 = mapXtimmy02 + mapXtimmy03;
let mapYtimmy04 = 0;
let mapXtimmy05 = 0;
let mapYtimmy05 = 270;
let mapXtimmy06 = 220;
let mapYtimmy06 = 270;
let mapXtimmy07 = mapXtimmy06 * 2;
let mapYtimmy07 = 270;
let mapXtimmy08 = mapXtimmy06 + mapXtimmy07;
let mapYtimmy08 = 270;
let mapXtimmy09 = 0;
let mapYtimmy09 = mapYtimmy05 * 2;
let mapXtimmy10 = 220;
let mapYtimmy10 = mapYtimmy06 * 2;
let mapXtimmy11 = mapXtimmy10 * 2;
let mapYtimmy11 = mapYtimmy07 * 2;
let mapXtimmy12 = mapXtimmy10 + mapXtimmy11;
let mapYtimmy12 = mapYtimmy08 * 2;
let mapXtimmy13 = 0;
let mapYtimmy13 = mapYtimmy05 + mapYtimmy09;
let mapXtimmy14 = 220;
let mapYtimmy14 = mapYtimmy06 + mapYtimmy10;
let mapXtimmy15 = mapXtimmy14 * 2;
let mapYtimmy15 = mapYtimmy07 + mapYtimmy11;
let mapXtimmy16 = mapXtimmy14 + mapXtimmy15;
let mapYtimmy16 = mapYtimmy08 + mapYtimmy12;
*/

class SpriteTimmy {
    constructor(imageTimmy){
        this.imageTimmy = imageTimmy;
        this.matrix = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540], 
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
        ];
        this.currentFrame = 0;
    }

    animate(){
        this.currentFrame++;
        
        if (this.currentFrame >= this.matrix.length - 1) {
            this.currentFrame = 0;
        }
    }
    
    showTimmy(){
        //image(this.imageTimmy, 0, height - 135, 110, 135, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], 220, 270);
        image(this.imageTimmy, abscissaTimmy, (height - heightTimmy), widthTimmy, heightTimmy, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], axisX, axisY);
        this.animate();
    }
}