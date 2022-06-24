class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 180;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('moving right');
        world.character.x += world.character.speed

    }

    moveleft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}