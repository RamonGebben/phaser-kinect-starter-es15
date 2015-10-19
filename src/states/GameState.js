export default class GameState extends Phaser.State {
	
	constructor() {
		super();	
	}
	
	preload() {
		this.game.load.image('phaser', 'assets/preload.png');
		Phaser.ScaleManager.EXACT_FIT
	}
	
	create() {
		this.sprite = this.game.add.sprite(0, 0, 'phaser');
	}
	
	update() {
		console.log('update game here');
	}
	
}
