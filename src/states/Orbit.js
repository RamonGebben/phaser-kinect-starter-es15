export default class Orbit extends Phaser.State {
	
	constructor() {
		super();
		console.log(this);
	}
	
	preload() {
		console.log('inside preload');
		this.game.load.image('Space', 'assets/bg.png');
	}
	
	create() {
		let space = this.game.add.sprite(0, 0, 'Space');
		space.height = this.game.height;
		space.width = this.game.width;		
	}
	
	update() {
			
	}
	
}