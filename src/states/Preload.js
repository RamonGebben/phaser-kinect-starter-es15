import Connection from '../Connection.js';

export default class Preload extends Phaser.State {

	constructor() {
		super();
		this.emitter = null;
		this.connection = Connection;
	}

	preload() {
		this.game.load.image('Rocket', 'assets/rocket.png');
		this.game.load.image('splash', 'assets/splash.jpg');

		setTimeout(() => {
			this.state.start('Start');
		}, 1);
	}

	loadUpdate () {
		console.log('loading preload');
	}

	onBodyData(data){
		// Interact here with data bodies;
		// console.log('From Preload', data);
	}

	create() {

		let rocket = this.emitter,
			centerX = this.game.world.centerX,
			centerY = this.game.world.centerY,
			space = this.game.add.sprite(0, 0, 'splash');

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
