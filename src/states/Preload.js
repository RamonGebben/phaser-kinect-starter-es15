export default class Preload extends Phaser.State {
	
	constructor() {
		super();
		this.emitter = null;
	}
	
	preload() {	
		this.game.load.image('Rocket', 'assets/rocket.png');
		this.game.load.image('Space', 'assets/bg.png');

		setTimeout(() => {
			this.state.start('Start');
		}, 4000);
	}
	
	loadUpdate () {
		console.log('loading preload');
	}
	
	create() {
		
		let rocket = this.emitter,
			centerX = this.game.world.centerX,
			centerY = this.game.world.centerY,
			space = this.game.add.sprite(0, 0, 'Space');
			 
		space.height = this.game.height;
		space.width = this.game.width;
			
		rocket = this.game.add.emitter(centerX, 200, 200);
		rocket.makeParticles('Rocket');
		rocket.start(false, 10, 0);
		rocket.scale.x = .2;
		rocket.scale.y = .2;
		rocket.position.x = centerX;
		rocket.position.y = centerY;
		
		
	}
	
	update() {
		
	}
	
}