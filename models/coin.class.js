class Coin extends MovableObject {
    height = 120;
    width = 120;

    IMAGE_COIN = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ]

    constructor() {
        super().loadImage(this.IMAGE_COIN[0]);
        this.loadImages(this.IMAGE_COIN);
        this.x = 200 + Math.random() * 2200;
        this.y = 50 + Math.random() * 80;
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_COIN);
        }, 200);
    }
}