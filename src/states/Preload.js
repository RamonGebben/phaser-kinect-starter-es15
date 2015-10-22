export default class Preload extends Phaser.State {
	
	constructor() {
		super();
	}
	
	preload() {
		console.log('loading screen');
		setTimeout(() => {
			this.state.start('Start');
		}, 2000);
	}
	
	loadUpdate () {
		 
	}
	
	create() {
		
	}
	
	update() {
		
	}
	
}