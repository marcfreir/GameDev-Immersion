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