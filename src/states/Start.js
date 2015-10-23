import Preload from './Preload.js';
import Connection from '../Connection.js';

export default class Start extends Phaser.State {

	constructor() {
		super();
		this.sprite = null;
		this.pausedSprite = null;
		this.button;
		this.background;
		this.connection = Connection;
	}

	onBodyData(data){
		// Interact here with data bodies;
		// console.log('From Start', data);
	}

	preload() {
	    this.game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
	    this.game.load.image('background','assets/bg.png');
		this.game.load.image('splash', 'assets/splash.jpg');
	}

	create() {
		const fontStyle = { font: "92px Arial", fill: "#182d3b", wordWrap: true, wordWrapWidth: this.game.world.width, align: "center" };
	    this.game.stage.backgroundColor = '#182d3b';
	    this.background = this.game.add.sprite(0, 0, 'splash');
		this.background.height = this.game.height;
		this.background.width = this.game.width;
	    this.button = this.game.add.button(this.game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);
	    this.button.onInputOver.add(this.over, this);
	    this.button.onInputOut.add(this.out, this);
	    this.button.onInputUp.add(this.up, this);

		this.text = this.game.add.text(this.game.world.centerX - 300, 250, 'Rocket Science', fontStyle);
		this.text.anchor.set(0.5);
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
	    //this.background.visible =! this.background.visible;
	}
}
