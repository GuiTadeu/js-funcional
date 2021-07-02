const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, '08_data.txt')

// _ "Não importa o parâmetro, não utilizarei dentro da function"
function showContent(_, content) {
    console.log(content.toString())
}

fs.readFile(file, showContent)