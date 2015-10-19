import GameState from './states/GameState';

export default class Game extends Phaser.Game {
	constructor() {
		super(window.clientHeight, window.clientWidth, Phaser.AUTO, 'phaser-example', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}	
}

new Game();
