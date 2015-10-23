export default class Orbit extends Phaser.State {
	
	constructor() {
		super();
		this.rocket = null;
		this.sprite = null;
		this.bmd = null;
	}
	
	preload() {
		this.game.load.image('chunk', 'assets/sprites/chunk.png');
    	this.game.load.image('arrow', 'assets/sprites/asteroids_ship.png');
	}
	
	createPlanets() {
		let launchPlanet = this.game.add.graphics(0, 0),
			targetPlanet = this.game.add.graphics(0, 0);
			
		launchPlanet.beginFill(0xFFFF0B, 1);
		launchPlanet.drawCircle(window.innerWidth, window.innerHeight, 300);
		launchPlanet.endFill();

		targetPlanet.beginFill(0xffffff, 1);
		targetPlanet.drawCircle(0, window.innerHeight, 300);
		targetPlanet.endFill();
	}
	
	launchRocket() {
		if (this.game.input.x < this.sprite.x) {
			this.sprite.body.velocity.setTo(-200, -200);
		} else {
		    this.sprite.body.velocity.setTo(200, -200);		
		}    
	}
	
	setBackground() {
		let space = this.game.add.sprite(0, 0, 'Space');
		space.height = this.game.height;
		space.width = this.game.width;
	}

	create() {		
		this.setBackground();
		this.createPlanets();
		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
    	this.rocketPath = this.game.add.bitmapData(this.game.width, this.game.height);
    	this.rocketPath.context.fillStyle = '#ffffff';
    	this.game.add.sprite(0, 0, this.rocketPath);
    	this.game.physics.arcade.gravity.y = 100;
    	this.sprite = this.game.add.sprite(32, 450, 'arrow');
    	this.sprite.anchor.set(0.5);
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
    	
	}
}