// Enemies our player must avoid
var Enemy = function(x, y, dt) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.dt = dt;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.dt *=  1;
    this.render(this.x=this.x+this.dt);
    if (this.x > 500){
        this.render(this.x=-150);
    }
    console.log(this.x);
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(x) {
    //console.log(this.sprite);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png'
}

Player.prototype.update = function () {

}

Player.prototype.render = function (x , y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (argument) {
    switch(argument){

        case "up":
        this.y -= 90;
        if(this.y === -50)
        {
            this.render( this.x=200, this.y=400);
            break;
        }
        else
        {
            this.render( this.x, this.y);
            break;
        }


        case "down":
        this.y+=90;
        if(this.y >=400){
            this.render( this.x, this.y=400);    
            break;
        }
        else
        {
            this.render( this.x, this.y);    
            break;   
        }


        case "left":
        this.x-=100;
        if(this.x <= -100)
        {
            this.render( this.x = 0, this.y);
            break; 
        }
        else
        {
            this.render( this.x, this.y);
            break; 
        }


        case "right":
        this.x+=100;
        if(this.x >400){
            this.render( this.x = 400, this.y);
            break;    
        }
        else
        {
            this.render( this.x, this.y);
            break;   
        }
    }
}   

var enemy1 = new Enemy(-100, 200, 4);
var enemy2 = new Enemy(-100, 100, 1);

var allEnemies = [enemy1,enemy2];
var player = new Player(200,400);
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
