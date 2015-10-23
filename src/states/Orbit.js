export default class Orbit extends Phaser.State {
	
	constructor() {
		super();
		this.rocket = null;
		this.sprite = null;
		this.bmd = null;
		
		this.velocityX = 100;
		this.velocityY = -200;
		this.gravity = 50;
		this.launched = false;
		this.trail = '#D3D3D3';
		this.launchedPlanet = null;
		this.targetPlanet = null;
	}
	
	preload() {
    	this.game.load.image('rocket', 'assets/rocket.png');
		this.game.load.image('explosion', 'assets/explosion.png');
	}
	
	createPlanets() {
		this.launchPlanet = this.game.add.graphics(0, 0),
		this.targetPlanet = this.game.add.graphics(0, 0);

		this.launchPlanet.beginFill(0xFFFF0B, 1);
		this.launchPlanet.drawCircle(window.innerWidth, window.innerHeight, 300);
		this.launchPlanet.endFill();

		this.targetPlanet.beginFill(0xffffff, 1);
		this.targetPlanet.drawCircle(0, window.innerHeight, 300);
		this.targetPlanet.endFill();
	}
	
	launchRocket() {
		if(!this.launched) {
			this.sprite.body.velocity.setTo(this.velocityX, this.velocityY);
			this.launched = true;
		}				    
	}

	setBackground() {
		let space = this.game.add.sprite(0, 0, 'Space');
		space.height = this.game.height;
		space.width = this.game.width;
	}

	create() {
		//because of stacking add these first
		this.setBackground();
		this.createPlanets();
		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
    	this.rocketPath = this.game.add.bitmapData(this.game.width, this.game.height);
    	this.rocketPath.context.fillStyle = this.trail;
		
    	this.game.add.sprite(0, 0, this.rocketPath);
    	this.game.physics.arcade.gravity.y = this.gravity;
		
    	this.sprite = this.game.add.sprite(32, 450, 'rocket');
    	this.sprite.anchor.set(0.5);
		this.sprite.width = 30;
		this.sprite.height = 60;
		
   		this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.body.collideWorldBounds = true;
		this.sprite.body.bounce.set(.1);
    	this.game.input.onDown.add(this.launchRocket, this);
	
	}

	update() {
		this.sprite.rotation = this.sprite.body.angle;
		this.rocketPath.context.fillRect(this.sprite.x, this.sprite.y, 2, 2);
		this.rocketPath.dirty = true;
	}
	
	render() {
    	this.game.debug.bodyInfo(this.sprite, 32, 32);
		// Phaser.Physics.Arcade.collide(enemiesGroup, this.rocket);
	}
}