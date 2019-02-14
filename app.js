// Enemies our player must avoid
let allEnemies = [];

class Enemy{
	constructor(posX, posY, speed){
		this.sprite = 'images/enemy-bug.png';
		this.x = posX;
		this.y = posY;
		this.speed = speed;
	}
	update(dt){
		this.x += this.speed * 2;
		if (this.x > 500){
			this.x = -100;
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
    }
    handleInput(direct){
    	if (direct === 'right') {
    		this.x += 83;
    	}
    	if (direct === 'left') {
    		this.x -= 83;
    	}
    	if (direct === 'down') {
    		this.y += 83;
    	}
    	if (direct === 'up') {
    		this.y -= 83;
    	}
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
