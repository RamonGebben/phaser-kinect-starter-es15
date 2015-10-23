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
		this.count = 0;
		this.trail = '#D3D3D3';
		this.launchedPlanet = null;
		this.targetPlanet = null;
	}
	
	preload() {
    	this.game.load.image('rocket', 'assets/rocket.png');
		this.game.load.image('explosion', 'assets/explosion.png');
		this.game.load.image('Space', 'assets/bg.png');
	}
	
	createPlanets() {
		this.launchPlanet = this.game.add.graphics(0, 0);
		this.targetPlanet = this.game.add.graphics(0, 0);

		this.targetPlanet.beginFill(0xFFFF0B, 1);
		this.targetPlanet.drawCircle(window.innerWidth, window.innerHeight, 300);
		this.targetPlanet.endFill();

		this.launchPlanet.beginFill(0xffffff, 1);
		this.launchPlanet.drawCircle(0, window.innerHeight, 300);
		this.launchPlanet.endFill();
	}
	
	launchRocket() {
		if (this.count < 2) {
			this.sprite.body.velocity.setTo(this.velocityX, this.velocityY);
			this.launched = true;
		}
		this.count++;
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
	
	render() {
    	
	}

	update() {
		// this.sprite.rotation = this.sprite.body.angle;
		this.rocketPath.context.fillRect(this.sprite.x, this.sprite.y, 2, 2);
		this.rocketPath.dirty = true;
		if (this.launched) {
			if (this.game.height - this.sprite.body.y === 60 || this.sprite.body.y === 0) {
				this.sprite.destroy();
			}
			
		}		
	}
}