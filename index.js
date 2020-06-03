const stream = require('stream');

class HexEncoder extends stream.Transform {
	constructor(options) {
		super(options);
	}

	_transform(chunk, _encoding, callback) {
		this.push(chunk.toString('hex'));
		callback();
	}

	_flush(callback) {
		callback();
	}
};

class HexDecoder extends stream.Transform {
	constructor(options) {
		super(options);
		this.remaining = '';
	}

	_transform(chunk, _encoding, callback) {
		let str = this.remaining + chunk.toString('ascii');
		const remainingLength = str.length % 2;
		this.remaining = str.slice(str.length - remainingLength);
		chunk = str.slice(0, str.length - remainingLength);

		this.push(Buffer.from(chunk, 'hex'));
		callback();
	}

	_flush(callback) {
		callback();
	}
};

module.exports = {
	HexEncoder,
	HexDecoder
};
