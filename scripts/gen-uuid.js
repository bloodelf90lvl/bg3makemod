const { v4: uuidv4 } = require('uuid');

const toLoca = (v) => `h${String(v).replace(/-/g, 'g')}`

const uid = uuidv4()

console.log(uid)
console.log(toLoca(uid));