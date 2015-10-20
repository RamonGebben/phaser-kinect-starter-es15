import GameState from './states/GameState';

class Game extends Phaser.Game {
	constructor() {
		super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', null);
		this.state.add('GameStateStart', GameState.StateA, false);
		this.state.add('GameStatePlaying', GameState.StateB, false);
		this.state.add('GameStateEnd', GameState.StateC, false);
		this.state.start('GameStateStart');
	}	
}

new Game();
