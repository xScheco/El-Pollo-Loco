class CoinBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    ];
    coins = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 80;
        this.height = 50;
        this.width = 160;
        this.setCoinBar();
    }

    collectCoin() {
        this.coins++;
    }

    setCoinBar() {
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coins == 0) {
            return 0;
        } else if (this.coins == 1) {
            return 1;
        } else if (this.coins == 2) {
            return 2;
        } else if (this.coins == 3) {
            return 3;
        } else if (this.coins == 4) {
            return 4;
        } else if (this.coins == 5) {
            return 5;
        } else {
            return 5;
        }
    }
}