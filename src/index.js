import Preload from './states/Preload';
import Menu from './states/Menu';
import Start from './states/Start';
import Editor from './states/Editor';
import End from './states/End';
import BodyData from './includes/bodydata/bodydata';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', null);
		this.state.add('Preload', Preload, false);
		this.state.add('Menu', Menu, false);
		this.state.add('End', End, false);
		this.state.add('Start',Start, false);
		this.state.add('Editor', Editor, false);
		this.state.start('Preload');
	}

	_bindSocket() {
        this.websocket = new WebSocket('ws://localhost:1234/');
        this.websocket.onmessage = this._handleMessage.bind(this);
    }

	_handleMessage(msg) {
        let packet = JSON.parse(msg.data);
        switch(packet.type) {
            case 'bodyData':
                return this._onBodyData(packet.data);
        }
    }

    _onBodyData(data) {
		console.log( data );
		let testData = new BodyData(data);
		console.log( testData );
        return this.onBodyData(new BodyData(data));
    }
}

new Game();
