// Enemies our player must avoid
let allEnemies = [];

class Enemy{
    constructor(){
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = 60;
        this.speed = 3;
    }
    update(dt){
        this.x += this.speed * dt * 61;
        if (this.x > 500){
            this.x = -100;
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class EnemyTwo{
    constructor(){
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = 143;
        this.speed = 1;
    }
    update(dt){
        this.x += this.speed * dt * 65;
        if (this.x > 500){
            this.x = -100;
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class EnemyThree{
    constructor(){
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = 226;
        this.speed = 5;
    }
    update(dt){
        this.x += this.speed * dt * 68;
        if (this.x > 500){
            this.x = -100;
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

allEnemies = [new Enemy(), new EnemyTwo(), new EnemyThree()];
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 202;
        this.y = 404;
        this.speed = 1.3;
    }
    handleInput(direct){
    }    
    update(dt){

    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


const player = new Player()



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

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

