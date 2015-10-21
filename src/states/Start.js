export default class Start extends Phaser.State {
	
	constructor() {
		super();
		this.canvas = document.getElementsByTagName('canvas');
	}
	
	preload() {
		this.game.load.image('phaser', 'assets/preload.png');
	}
	
	create() {
		this.sprite = this.game.add.sprite(window.innerWidth/2, window.innerHeight/2, 'phaser');
		this.sprite.anchor.setTo(0.5, 0.5);
		console.log('State Start');
	}
	
	update() {
		this.sprite.rotation += .01;
	}
	
}