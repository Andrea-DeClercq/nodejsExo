const fs = require('fs')
const foo = require('./foo')

const path = './temp'

// import addition foo
console.log(foo(4,7))

// Copie fichier
fs.copyFileSync('text1.txt', 'text2.txt')

if (!fs.existsSync(path)) {
    fs.mkdirSync(path, {recursive: true})
} 

try {
    fs.unlinkSync('text2.txt')
    console.log('File text2.txt suppr success')
    // fs.rmdirSync(path, {recursive: true})
} catch (error) {
    console.log(error);
}