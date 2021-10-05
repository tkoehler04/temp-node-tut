const {readFileSync, writeFileSync, write, writeFile} = require('fs');

// NOTE: this is the same thing:
    // const fs = require('fs');
    // fs.readFileSync....... etc.
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag: 'a' } //writeOption for Append
    );
console.log('done with this task');
console.log('starting the next task');

// OUTPUT:
// start
// done with this task
// staring the next task