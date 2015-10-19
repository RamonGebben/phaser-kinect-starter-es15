export default class GameState extends Phaser.State {
	
	constructor() {
		super();
	}
	
	preload() {
		this.game.load.image('phaser', 'assets/preload.png');
	}
	
	create() {
		this.sprite = this.game.add.sprite(370, 370, 'phaser');
		this.sprite.anchor.setTo(0.5, 0.5);
	}
	
	update() {
		this.sprite.rotation += .02;
		console.log('some stupid animation that shows it works');
	}
	
}
