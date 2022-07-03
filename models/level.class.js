class Level {
    enemies;
    clouds;
    backgroundObject;
    bottle;
    coin;
    endboss;
    level_end_x = 2200;
    constructor(enemies, clouds, backgroundObject, bottle, coin, endboss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
        this.bottle = bottle;
        this.coin = coin;
        this.endboss = endboss;
    }
}