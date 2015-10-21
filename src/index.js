import Preload from './states/Preload';
import Menu from './states/Menu';
import Start from './states/Start';
import End from './states/End';

class Game extends Phaser.Game {
	constructor() {
		super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', null);
		this.state.add('Preload', Preload, false);
		this.state.add('Menu', Menu, false);
		this.state.add('End', End, false);
		this.state.add('Start',Start, false);
		this.state.start('Start');
	}
}

new Game();
