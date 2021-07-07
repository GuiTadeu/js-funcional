const fs = require('fs')
const pathUtils = require('path')

function readDir(pathDir) {
    return new Promise(resolve => {
        fs.readdir(pathDir, (_, filenames) => {
            resolve(filenames.map(file => pathUtils.join(pathDir, file)))
        })
    })
}

function filterExt(ext) {
    return function(files) {
        return files.filter(path => path.endsWith(ext))
    }
}

function readFiles(paths) {
    return Promise.all(paths.map(path => readFile(path)))
}

function readFile(path) {
    return new Promise((resolve) => {
        const content = fs.readFileSync(path, "utf8")
        resolve(content.toString())
    })
}

function removeIfEmpty(array) {
    return array.filter(content => content.trim())
}

function removeIfContains(key) {
    return function(array) {
        return array.filter(content => !content.includes(key))
    }
}

function removeIfNumber(array) {
    return array.filter(content => isNaN(content))
}

function removeSpecialCharacters(array) {
    return array.map(content => content.replace(new RegExp(/[^a-zA-Z \']/,'g'), ''))
}

function removeHtml(array) {
    return array.map(content => content.replace(new RegExp(/<[^>]*>?/, 'g'), ''))
}

function groupByWords(words) {
    return Object.values(words.reduce((grouping, element) => {
        const word = element.toLowerCase()
        const qt = grouping[word] ? grouping[word].qt + 1 : 1
        
        grouping[word] = { word: word, qt: qt }

        return grouping
    }, {}));
}

function orderByAttr(attr, ordering = 'asc') {
    return function(array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordering === 'asc' ? asc : desc)
    }
}

const joinContents = array => array.join(' ')
const splitByLines = contents => contents.split('\n')
const splitByWords = contents => contents.split(' ')

module.exports = {
    readDir, filterExt, readFiles, removeIfEmpty, removeIfContains, 
    removeIfNumber, removeSpecialCharacters, removeHtml, joinContents,
    splitByLines, splitByWords, groupByWords, orderByAttr
}

/*const fs = require('fs')
const path = require('path')

const srtFilter = (path) =>  {
    return path.split('.').pop() === 'srt'
}

const getPathFiles = dirname => {
    return new Promise(resolve => {
        fs.readdir(dirname, (_, filenames) => {
            resolve(filenames.map(file => path.join(dirname, file)))
        })
    })
}

const srtSanitizer = line => {
    return line != '' 
        && !line.includes(' --> ') 
        && isNaN(line)
}

const srtTransform = line => {
    let result

    result = line.replace(/(<([^>]+)>)/ig, "")
    result = result.replace(/[^\w\s]/gi, "")
    result = result.split(" ")
    result = result.filter(el => el != "")

    return result
}

module.exports = {
    srtFilter, getPathFiles, srtSanitizer, srtTransform
}*/