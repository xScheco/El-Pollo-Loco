class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 350;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;

    }
}