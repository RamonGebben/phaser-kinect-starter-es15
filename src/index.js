import Preload from './states/Preload';
import Start from './states/Start';
import Orbit from './states/Orbit';
import Editor from './states/Editor';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', null);
		this.state.add('Preload', Preload, false);
		this.state.add('Start',Start, false);
		this.state.add('Editor', Editor, false);
		this.state.add('Orbit', Orbit, false);
		this.state.start('Preload');
		// this._bindSocket();
	}
}

new Game();
