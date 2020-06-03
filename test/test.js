const { HexEncoder, HexDecoder } = require('../index');
const crypto = require('crypto');
const assert = require('assert');

const length = 128;

const data = crypto.randomBytes(length);
const hexData = data.toString('hex');

const hexEncoder = new HexEncoder();
const hexDecoder = new HexDecoder();

for (let i = 0; i < length; ++i)
	hexEncoder.write(data.slice(i, i+1));
const encodeResult = hexEncoder.read().toString('ascii');
assert(hexData === encodeResult);


for (let i = 0; i < 2*length; i += 1)
	hexDecoder.write(hexData.slice(i*2, (i+1)*2));
const decodeResult = hexDecoder.read();
assert(data.equals(decodeResult));
