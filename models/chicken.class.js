class Chicken extends MovableObject {
    y = 345;
    height = 80;
    width = 60;

    IMAGE_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ]

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 200 + Math.random() * 2200;
        this.loadImages(this.IMAGE_WALKING);
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }


    animate() {
        this.moveleft();
        setInterval(() => {
            this.playAnimation(this.IMAGE_WALKING);
        }, 200);
    }


}