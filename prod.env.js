const MODEL = require('../static/config.js')
const pro = {
    NODE_ENV: '"production"'
}
module.exports = Object.assign({}, pro, MODEL) 