import Connection from '../Connection.js';

export default class Editor extends Phaser.State {

	constructor() {
		super();
		this.parts = [
			{
				title: 'head',
				type: 'head',
				image: 'assets/parts/head_1.png'
			},
			{
				title: 'body',
				type: 'body',
				image: 'assets/parts/body_1.png'
			},
			{
				title: 'stablizers',
				type: 'stablizers',
				image: 'assets/parts/stabilizers_1.png'
			},
			{
				title: 'jet',
				type: 'jet',
				image: 'assets/parts/jet_1.png'
			}
		]
		this.connection = Connection;
	}

	onBodyData(data){
		// Interact here with data bodies;
		// console.log('From Editor', data);
	}

	preload() {
		this.parts.forEach((part) => {
			this.game.load.image(part.title, part.image );
		});
		this.game.load.image('Space', 'assets/bg.png');
	}

	create() {

	}

	update() {

	}

}
