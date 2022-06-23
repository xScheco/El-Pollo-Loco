class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 180;
    width = 150;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right');
        world.character.x += world.character.speed

    }

    moveleft() {
        world.character.x -= world.character.speed
    }
}