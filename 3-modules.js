// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

// when you require a module, you envoke it
require('./7-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
