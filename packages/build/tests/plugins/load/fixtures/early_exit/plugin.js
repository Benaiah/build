const { exit } = require('process')

module.exports = {
  name: 'netlify-plugin-test',
  build() {
    console.log('test')
  },
}

setTimeout(() => {
  setTimeout(() => {
    exit()
  }, 0)
}, 0)