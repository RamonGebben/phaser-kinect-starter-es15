import BodyData from './includes/bodydata/bodydata';

class Connection {

	constructor() {
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
        return this.onBodyData(new BodyData(data));
    }

	onBodyData(data){
		console.log('no onBodyData function configured', data);
		setTimeout(() => {
			this.websocket.close();
		}, 1000);

	}
}

export default new Connection();
