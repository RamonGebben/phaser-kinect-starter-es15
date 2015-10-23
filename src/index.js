import Preload from './states/Preload';
import Menu from './states/Menu';
import Start from './states/Start';
import Orbit from './states/Orbit';
import Editor from './states/Editor';
import End from './states/End';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', null);
		this.state.add('Preload', Preload, false);
		this.state.add('Menu', Menu, false);
		this.state.add('End', End, false);
		this.state.add('Start',Start, false);
		this.state.add('Editor', Editor, false);
		this.state.add('Orbit', Orbit, false);
		this.state.start('Orbit');
		// this._bindSocket();
	}
}

new Game();
