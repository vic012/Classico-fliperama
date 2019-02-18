// Enemies our player must avoid
let allEnemies = [];

class Enemy{
    constructor(posX, posY, speed){
        this.sprite = 'images/enemy-bug.png';
        this.x = posX;
        this.y = posY;
        this.speed = speed;
        this.largura = {x: this.x, width: 50};
        this.altura = {y: this.y, height: 50};
    }
    update(dt){
        this.x += this.speed * 2;
        this.largura = this.x;
        if (this.x > 500){
            this.x = -100;
            this.largura = -100;
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

allEnemies = [new Enemy(-100,60,2.5), new Enemy(-100,143,2), new Enemy(-100,226,3.5)];
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 202;
        this.y = 404;
        this.speed = 2;
        this.largura = {x: this.x, width: 50};
        this.altura = {y: this.y, height: 50};

        }
    handleInput(direct){
        if (direct === 'right' && this.x < 390) {
            this.x += 101;
            this.largura += 101;
        }
        if (direct === 'left' && this.x > 10) {
            this.x -= 101;
            this.largura -= 101;
        }
        if (direct === 'down' && this.y < 400) {
            this.y += 83;
            this.altura += 83;
        }
        if (direct === 'up' && this.y > 5) {
            this.y -= 83;
            this.altura -= 83;
        }
    }
    update(){
        if (this.y <= 0){
            this.x = 202;
            this.y = 404;
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

const player = new Player()


function colid(player, allEnemies) {
    for (let c = 0; c < allEnemies.length; c ++) {
        if (player.x < allEnemies[c].x + Enemy.largura &&
            player.x + player.largura > allEnemies[c].x &&
            player.y < allEnemies[c].y + Enemy.altura &&
            player.y + player.altura > allEnemies[c].y) {
            player.x = 202;
            player.y = 404;
            player.update();
        }
    }
}

player.update();
colid(player,allEnemies);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
