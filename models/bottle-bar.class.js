class BottleBar extends DrawableObject {
    percentage = 0;

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];
    bottles = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 40;
        this.height = 50;
        this.width = 160;
        this.setBottleBar();
    }

    collectBottle() {
        this.bottles++;
    }


    setBottleBar() {
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.bottles == 0) {
            return 0;
        } else if (this.bottles == 1) {
            return 1;
        } else if (this.bottles == 2) {
            return 2;
        } else if (this.bottles == 3) {
            return 3;
        } else if (this.bottles == 4) {
            return 4;
        } else if (this.bottles == 5) {
            return 5;
        } else {
            return 5;
        }
    }

}