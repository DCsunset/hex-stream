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
	}

	_transform(chunk, _encoding, callback) {
		this.push(Buffer.from(chunk.toString('ascii'), 'hex'));
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
