const fs = require('fs')
const path = require('path')

const promise = path => new Promise(resolve => {
    fs.readFile(path, (_, content) => {
        resolve(content.toString())
    })
});

const file = path.join(__dirname, 'challenge-07.txt')
promise(file).then(console.log)