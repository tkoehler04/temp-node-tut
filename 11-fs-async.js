// asynchronous methods:
const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;   // result from reading first text file
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;  // result from reading second text file
        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`
        ,(err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');


// OUTPUT:
// start
// staring next task
// done with this task