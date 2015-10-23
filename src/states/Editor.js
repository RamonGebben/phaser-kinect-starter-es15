export default class Editor extends Phaser.State {

	constructor() {
		super();
		this.parts = [
			{
				title: 'Red ball',
				type: 'head',
				image: 'assets/parts/head_1.png'
			},
			{
				title: 'body',
				type: 'body',
				image: 'assets/parts/body_1.png'
			},
			{
				title: 'stabilizers',
				type: 'stabilizers',
				image: 'assets/parts/stabilizers_1.png'
			},
			{
				title: 'jet',
				type: 'jet',
				image: 'assets/parts/jet_1.png'
			}
		]
	}

	preload() {


		this.parts.forEach((part) => {
			console.log(part)
			this.game.load.image(part.title, part.image);
		});

		this.game.load.image('outline','assets/outline-rocket.png');
		this.game.load.image('Space', 'assets/bg.png');
	}

	create() {
		//sprites
		console.log('im on editor');
		let background = this.game.add.sprite(0,0, 'Space');
		background.width = this.game.width;
		background.height = this.game.height;

		this.parts.forEach((part, index) => {
			switch(part.type) {
				case 'head':
					this.game.add.sprite(this.game.world.centerX + 310,10, part.title, part.image);
					break;
				case 'body':
					this.game.add.sprite(this.game.world.centerX + 360, 210, part.title, part.image);
					break;
				case 'stabilizers':
					this.game.add.sprite(this.game.world.centerX + 310, 710, part.title, part.image);
					break;
				case 'jet':
					this.game.add.sprite(this.game.world.centerX + 510, 10, part.title, part.image);
					break;
				default :
					'nothing';

			}
		});

		this.game.add.sprite(this.game.world.centerX - 200, this.game.world.centerY - 300, 'outline');

		var marker;
		marker = this.game.add.graphics();
		marker.lineStyle(2, 0x00FF00, 1);
		marker.drawRect(this.game.world.centerX + 300, 0, 170, 200);
		marker.drawRect(this.game.world.centerX + 470, 0, 160, 200);
		marker.drawRect(this.game.world.centerX + 300, 200, 330, 500);
		marker.drawRect(this.game.world.centerX + 300, 700, 330, 250);

	}

	update() {

	}

}
