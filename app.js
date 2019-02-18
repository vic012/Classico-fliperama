// Enemies our player must avoid
let allEnemies = [];

class Enemy {
    constructor(posX, posY, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = posX;
        this.y = posY;
        this.speed = speed;
        this.largura = 50;
        this.altura = 50;
    }
    update(dt) {
        this.x += this.speed * 2;
        if (this.x > 500) {
            this.x = -100;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

allEnemies = [new Enemy(-100, 60, 2.5), new Enemy(-100, 143, 2), new Enemy(-100, 226, 3.5)];
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.x = 202;
        this.y = 404;
        this.speed = 2;
        this.largura = 50;
        this.altura = 50;
    }
    handleInput(direct) {
        if (direct === 'right' && this.x < 390) {
            this.x += 101;
        }
        if (direct === 'left' && this.x > 10) {
            this.x -= 101;
        }
        if (direct === 'down' && this.y < 400) {
            this.y += 83;
        }
        if (direct === 'up' && this.y > 5) {
            this.y -= 83;
        }
    }
    colid(jogador, inimigos) {
        for (let c = 0; c < inimigos.length; c++) {
            if (jogador.x < inimigos[c].x + inimigos[c].largura &&
                jogador.x + jogador.largura > inimigos[c].x &&
                jogador.y < allEnemies[c].y + inimigos[c].altura &&
                jogador.y + jogador.altura > inimigos[c].y) {
                jogador.x = 202;
                jogador.y = 404;
                this.update()
            }
        }
    }
    update() {
        if (this.y <= 0) {
            this.x = 202;
            this.y = 404;
        }
        this.colid(player,allEnemies)
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

const player = new Player()


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
