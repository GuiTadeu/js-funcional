const fs = require('fs')
const path = require('path')
const fn = require('./functions')

const folder = path.join(__dirname, 'subtitles')

fn.readDir(folder)
    .then(fn.filterExt('.srt'))
    .then(fn.readFiles)
    .then(fn.joinContents)
    .then(fn.splitByLines)
    .then(fn.removeIfEmpty)
    .then(fn.removeIfContains('-->'))
    .then(fn.removeIfNumber)
    .then(fn.removeHtml)
    .then(fn.removeSpecialCharacters)
    .then(fn.joinContents)
    .then(fn.splitByWords)
    .then(fn.removeIfEmpty)
    .then(fn.groupByWords)
    .then(fn.orderByAttr('qt', 'desc'))
    .then(console.log)

/*const fs = require('fs')
const path = require('path')
const myFunctions = require('./functions')

const folder = path.join(__dirname, 'subtitles')

const listOfWords = myFunctions.getPathFiles(folder)
    .then(files => files.filter(myFunctions.srtFilter))
    .then(srtFiles => srtFiles.map(path => fs.readFileSync(path, "utf8")))
    .then(contents => contents.toString().split("\r\n"))
    .then(lines => lines.filter(myFunctions.srtSanitizer))
    .then(lines => lines.map(myFunctions.srtTransform))
    .then(lines => lines.flat(Infinity))
    .then(words => words.reduce((allWords, word) => {
        if(word in allWords) {
            allWords[word]++
        } else {
            allWords[word] = 1
        }

        return allWords
    }, {}))
    .then(words => {
        return Object.entries(words).map(([k, v]) => ({ [k]: v }));
    })
    .then(words => words.sort((a, b) => Object.values(b) - Object.values(a)))
    .then(console.log)
*/