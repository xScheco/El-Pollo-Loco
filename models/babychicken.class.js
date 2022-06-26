class BabyChicken extends MovableObject {
    height = 50;
    width = 50;
    y = 380;

    IMAGE_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    constructor() {
        super().loadImage(this.IMAGE_WALKING[0]);
        this.loadImages(this.IMAGE_WALKING);
        this.x = 200 + Math.random() * 2200;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        this.moveLeft()
        setInterval(() => {
            this.playAnimation(this.IMAGE_WALKING);
        }, 200);
    }
}