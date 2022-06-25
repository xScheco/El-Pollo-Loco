class Bottle extends MovableObject {
    height = 100;
    width = 80;
    y = 330;
    IMAGES_BOTTLE = [
        'img/6.botella/1.Marcador.png',
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[this.radnomImage()]);
        this.x = 200 + Math.random() * 2200;
    };

    radnomImage() {
        return Math.floor(Math.random() * this.IMAGES_BOTTLE.length)
    }

}