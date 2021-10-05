const path = require('path');

console.log(path.sep);

// join gives you the NORMALIZED path, i.e. will remove extra slashes
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// return the last portion of a path
const base = path.basename(filePath);
console.log(base);

// return an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);