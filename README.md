# hex-stream

Simple hex encoder and decoder stream in node.js

## Install

```
npm install hex-stream
```

## Usage

A simple demo convert stdin to hex encoded string in `data.txt`:

```js
const { HexEncoder, HexDecoder } = require('hex-stream');
const fs = require('fs');
const fsStream = fs.createWriteStream('./data.txt');

process.stdin
	.pipe(new HexEncoder())
	.pipe(fsStream);
```
