class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    lifeBar = new LifeBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    throwableObject = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisions();
        }, 100);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottleBar.bottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y);
            this.throwableObject.push(bottle);
            this.bottleBar.bottles--; // verringert die Anzahl an Werfbaren Flaschen
            this.bottleBar.setBottleBar();
        }
    }

    checkCollisions() {
        this.checkCollisionEnemy();
        this.checkCollisionBottle();
        this.checkCollisionCoin();
        // this.checkbottle();

    }

    checkCollisionEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(5);
                this.lifeBar.setPercentage(this.character.energy);
                console.log(this.character.energy);
            }
        })
    }

    checkCollisionCoin() {
        this.level.coin.forEach((coins, index) => {
            if (this.character.isColliding(coins)) {
                this.level.coin.splice(index, 1);
                this.coinBar.collectCoin();
                this.coinBar.setCoinBar();
                console.log('Coins: ' + this.coinBar.coins); // Auf den End Screen anzeigen als Punkte zahl 
            };
        });
    }

    checkCollisionBottle() {
        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottle.splice(index, 1);
                this.amountsBottles++;
                this.bottleBar.collectBottle();
                this.bottleBar.setBottleBar();
                console.log('Bottles: ' + this.bottleBar.bottles)
            };
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.ctx.translate(this.camera_x, 0); // background wird nach rechts verschoben wenn der Character nach rechts läuft
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.lifeBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.coin);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); // background  wird nach links verschoben wenn der Character nach links läuft




        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}