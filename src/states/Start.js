import Preload from './Preload.js';

export default class Start extends Phaser.State {
	
	constructor() {
		super();
		this.canvas = document.getElementsByTagName('canvas'); 
		this.sprite = null;
		document.addEventListener('click', this.stateHandler.bind(this));
	}
	
	preload() {
		this.game.load.image(this.key, 'assets/preload.png');
		this.game.load.image('Space', 'assets/bg.png');
	}
	
	stateHandler(ev) {
		if (this.game.paused) {
			this.resumed();
		} else {
			this.paused();
		} 
	}
	
	paused() {
		this.game.paused = true;
	}
	
	resumed() {
		this.game.paused = false;
	}
		
	create() {
		 
		let space = this.game.add.sprite(0, 0, 'Space');
			 
		space.height = this.game.height;
		space.width = this.game.width;
		 
		this.sprite = this.game.add.sprite(this.world.centerX, this.world.centerY, this.key);		
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.anchor.set(0.5);
		this.game.add.tween(this.sprite.scale).to( { x: 0.2, y: 0.2 }, 2000, "Sine.easeInOut", true, 500, -1, true );
		
		console.log('State', this.key);
	}
	
	preRender() {
		
	}
	
	render() {
		console.log('do something in render if u want');
	}
	
	update() {
		this.sprite.rotation += .01;
	}
	
}