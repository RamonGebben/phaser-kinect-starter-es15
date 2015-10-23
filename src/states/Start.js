import Preload from './Preload.js';

export default class Start extends Phaser.State {

	constructor() {
		super();
		this.sprite = null;
		this.pausedSprite = null;
		this.button;
		this.background;
	}

	preload() {
	    this.game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
	    this.game.load.image('background','assets/bg.png');

	}

	create() {
	    this.game.stage.backgroundColor = '#182d3b';
	    this.background = this.game.add.sprite(0, 0, 'background');
		this.background.height = this.game.height;
		this.background.width = this.game.width;
	    this.button = this.game.add.button(this.game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);
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

	actionOnClick () {
		this.state.start('Editor');
	    this.background.visible =! this.background.visible;
	}
}
