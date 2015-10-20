import GameState from './states/GameState';

class Game extends Phaser.Game {
	constructor() {
		super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}	
}

new Game();
