// possible states
// init
// preload loadUpdate loadRender create update preRender render
// resize paused resumed pauseUpdate shutdown

export default class Start extends Phaser.State {
	
	constructor() {
		super();
		this.canvas = document.getElementsByTagName('canvas');
		document.addEventListener('click', this.stateHandler.bind(this), false);
	}
	
	preload() {
		this.game.load.image('phaser', 'assets/preload.png');
	}
	
	stateHandler(ev) {
		if (this.game.paused) {
			this.resumed()
		} else {
			this.paused()
		} 
	}
	
	paused() {
		this.game.paused = true;
	}
	
	resumed() {
		this.game.paused = false;
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