let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('my character is ', world.character);
}

// is key press then 
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "ArrowUp":
            keyboard.UP = true;
            break;
        case "d":
            keyboard.D = true;
            break;
        case " ":
            keyboard.SPACE = true;
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "ArrowUp":
            keyboard.UP = false;
            break;
        case "ArrowDown":
            keyboard.D = false;
            break;
        case " ":
            keyboard.SPACE = false;
            break;
    }
});