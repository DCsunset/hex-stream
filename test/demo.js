const { HexEncoder, HexDecoder } = require('../index');
const fs = require('fs');
const fsStream = fs.createWriteStream('./data');

process.stdin
	.pipe(new HexEncoder())
	.pipe(fsStream);
