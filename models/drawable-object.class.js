class DrawableObject {
    x = 120;
    y = 50;
    height = 180;
    width = 150;
    img;
    imageCache = {};
    currentImage = 0;

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

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

    //         LÖSCHEN        //
    drawFrame(ctx) {
        if (this.instanceofElement()) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
    instanceofElement() {
            return this instanceof Character || this instanceof Chicken || this instanceof BabyChicken || this instanceof Bottle || this instanceof Coin || this instanceof Endboss
        }
        // ********************** //

}