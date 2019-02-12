// Enemies our player must avoid
let allEnemies = [];

class Enemy{
	constructor(){
		this.sprite = 'images/enemy-bug.png';
		this.x = 0;
		this.y = 60;
		this.speed = 2;
	}
	update(dt){
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}


allEnemies = [new Enemy(), new Enemy()];
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  handleInput() {
    // posição x, y e sprite do player
  }
  update() {
    // caso queira animar ou atualizar
  }
  render() {
    // renderizar no canvas com o método ctx.drawImage()
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

