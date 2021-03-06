export default class Editor extends Phaser.State {

	constructor() {
		super();
		this.button;
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

		this.shizzle = {
			parts : {},
			validatedItems: []
		}
	}

	preload() {
		this.parts.forEach((part) => {
			console.log(part)
			this.game.load.image(part.title, part.image);
		});

		this.game.load.image('outline','assets/outline-rocket.png');
		this.game.load.spritesheet('launch_button', 'assets/launch_button_sprite_sheet.png', 193, 71);
		this.game.load.image('Space', 'assets/bg.png');
	}

	attachEvents() {
		Object.keys(this.shizzle.parts).forEach(key => {
			console.log( key );
			let part = this.shizzle.parts[key];
			part.inputEnabled = true;
			part.events.onInputDown.add(this.onDown, this);
		});
	}

	onDown(sprite){
		let outline = this.shizzle.outline,
			posX, posY;

		switch (sprite.key) {
			case 'head':
				posX = this.world.centerX - 275;
				posY = outline.position.y + 10;
				sprite.position.setTo(posX, posY);
				break;
			case 'body':
				posX = this.world.centerX - 316.5;
				posY = outline.position.y + 95;
				sprite.position.setTo(posX, posY);
				break;
			case 'stabilizers':
				posX = this.world.centerX - 350;
				posY = outline.position.y + 390;
				sprite.position.setTo(posX, posY);
				break;
			case 'jet':
				posX = this.world.centerX - 255;
				posY = outline.position.y + 580;
				sprite.position.setTo(posX, posY);
				break;
		}


		this.shizzle.validatedItems.push(sprite.key);
		this.validateItems();
	}

	validateItems(){
		if(this.shizzle.validatedItems.length === 4){
			this.addLaunchButton();
		}
	}

	create() {
		//sprites
		console.log('im on editor');
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		let background = this.game.add.sprite(0,0, 'Space');
		background.width = this.game.width;
		background.height = this.game.height;

		this.parts.forEach((part, index) => {
			switch(part.type) {
				case 'head':
					this.shizzle.parts[ part.title ] = this.game.add.sprite(this.game.world.centerX + 310,10, part.title, part.image);
					break;
				case 'body':
					this.shizzle.parts[ part.title ] = this.game.add.sprite(this.game.world.centerX + 360, 210, part.title, part.image);
					break;
				case 'stabilizers':
					this.shizzle.parts[ part.title ] = this.game.add.sprite(this.game.world.centerX + 310, 710, part.title, part.image);
					break;
				case 'jet':
					this.shizzle.parts[ part.title ] = this.game.add.sprite(this.game.world.centerX + 510, 10, part.title, part.image);
					break;
				default :
					'nothing';
			}
		});

		this.shizzle.outline = this.game.add.sprite(this.world.centerX - 200, this.world.centerY - 300, 'outline');
		this.shizzle.outline.originalPosition = this.shizzle.outline.position.clone();
	    this.game.physics.arcade.enable(this.shizzle.outline);
		this.shizzle.outline.anchor.set(0.5, 0);


		const marker = this.game.add.graphics();
		// marker.lineStyle(2, null, 1);
		marker.drawRect(this.game.world.centerX + 300, 0, 170, 200);
		marker.drawRect(this.game.world.centerX + 470, 0, 160, 200);
		marker.drawRect(this.game.world.centerX + 300, 200, 330, 500);
		marker.drawRect(this.game.world.centerX + 300, 700, 330, 250);
		this.attachEvents();
	}


	actionOnClick(){
		this.state.start('Orbit');
	}

	addLaunchButton(){
		console.log(this.game.world);
		this.button = this.game.add.button(this.game.world.centerX - 600, 50, 'launch_button', this.actionOnClick, this, 2, 1, 0);
	    this.button.onInputOver.add(this.over, this);
	    this.button.onInputOut.add(this.out, this);
	    this.button.onInputUp.add(this.up, this);
	}

	up() {
		console.log('button up', arguments);
	}

	over() {
		console.log('button over');
	}

	out() {
		console.log('button out');
	}

	update() {

	}

}
