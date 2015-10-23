import BodyData from '../includes/bodydata/bodydata';

export default class Base extends Phaser.State {

	constructor() {
		super();
		this._bindSocket();
	}

	_bindSocket() {
        this.websocket = new WebSocket('ws://10.111.101.103:1234/');
		window.socket = this.websocket;
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
		let bodyData = new BodyData(data);
		console.log( bodyData );
        return this.onBodyData(new BodyData(data));
    }

	onBodyData(data){
		console.log('no onBodyData function configured', data);
	}

	preload() {

	}

	create() {

	}

	update() {

	}

}
