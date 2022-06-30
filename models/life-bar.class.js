class LifeBar extends DrawableObject {
    percentage = 100;
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ];

    constructor(percentage) {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 0;
        this.height = 50;
        this.width = 160;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        // switch (this.percentage) {
        //     case '100':
        //         return 5;
        //         break;
        //     case '> 80':
        //         return 4;
        //         break;
        //     case '> 60':
        //         return 3;
        //         break;
        //     case '> 40':
        //         return 2;
        //         break;
        //     case '> 20':
        //         return 1;
        //         break;
        //     default:
        //         return 0;
        //         break;
        // }
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {}
        return 0;
    }
}